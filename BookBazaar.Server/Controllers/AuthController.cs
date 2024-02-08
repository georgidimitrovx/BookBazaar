using BookBazaar.Server.Models;
using BookBazaar.Server.Utilities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

[Route("api/[controller]")]
[ApiController]
public class AuthController : ControllerBase
{
    private readonly IConfiguration _configuration;
    private readonly IUserService _userService;

    public AuthController(IConfiguration configuration, IUserService userService)
    {
        _configuration = configuration;
        _userService = userService;
    }

    //[HttpGet("verifyToken")]
    //public IActionResult VerifyToken()
    //{
    //    return Ok("Token is valid");
    //    // todo validate token method
    //}

    [HttpPost("token")]
    public IActionResult GenerateToken([FromBody] UserCredentials credentials)
    {
        // Validation and token generation logic
        var token = GenerateJwtToken(credentials.Email);

        return Ok(new
        {
            token = token,
            expiration = DateTime.Now.AddMinutes(120)
        });
    }

    [HttpPost("register")]
    public async Task<IActionResult> RegisterAsync(UserRegistrationDto registrationDto)
    {
        // Validate the incoming data
        //if (!registrationDto.IsValid())
        //{
        //    return BadRequest("Data invalid.");
        //}

        // Check if the user already exists
        if (await _userService.ExistsAsync(registrationDto.Email))
        {
            return BadRequest("User already exists with the provided email.");
        }

        // Create a new user in the database
        var userAdapter = new UserAdapter();

        var user = await _userService.CreateUserAsync(userAdapter.Adapt(registrationDto));
        if (user == null)
        {
            return BadRequest("User creation failed.");
        }

        // Generate a JWT token or another form of token
        var token = GenerateJwtToken(user.Email);

        return Ok(new { jwtToken = token, name = user.Name, email = user.Email });
    }

    [HttpPost("login")]
    public async Task<IActionResult> LoginAsync(UserLoginDto loginDto)
    {
        // Validate the incoming data
        //if (!loginDto.IsValid())
        //{
        //    return BadRequest("Data invalid.");
        //}

        // Verify the user credentials
        var user = await _userService.GetUserByEmailAsync(loginDto.Email);
        if (user == null)
        {
            return NotFound();
        }

        if (user.Password != loginDto.Password)
        {
            return BadRequest("Wrong password.");
        }

        // Generate a JWT token or another form of token
        var token = GenerateJwtToken(loginDto.Email);

        // todo set token to user in db?

        // Return the token and user info
        return Ok(new { jwtToken = token, name = user.Name, email = user.Email });
    }

    private string GenerateJwtToken(string email)
    {
        var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));
        var signingCredentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

        var claims = new List<Claim>
        {
            new Claim(ClaimTypes.Email, email)
        };

        var token = new JwtSecurityToken(_configuration["Jwt:Issuer"],
            _configuration["Jwt:Audience"],
            claims: claims,
            expires: DateTime.Now.AddMinutes(120),
            signingCredentials: signingCredentials);

        return new JwtSecurityTokenHandler().WriteToken(token);
    }

    // todo use
    bool ValidateToken(string tokenString)
    {
        var handler = new JwtSecurityTokenHandler();
        var token = handler.ReadJwtToken(tokenString);
        var emailClaim = token.Claims.FirstOrDefault(c => c.Type == ClaimTypes.Email)?.Value;
        return emailClaim != default;
    }
}
