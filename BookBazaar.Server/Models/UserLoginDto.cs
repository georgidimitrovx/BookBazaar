namespace BookBazaar.Server.Models
{
    public class UserLoginDto
    {
        public required string Email { get; set; }
        public required string Password { get; set; }

        public bool IsValid()
        {
            return true;
        }
    }
}
