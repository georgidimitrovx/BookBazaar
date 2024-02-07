using BookBazaar.Server.Models;

namespace BookBazaar.Server.Utilities
{
    public class UserAdapter
    {
        public User Adapt(UserRegistrationDto dto)
        {
            // Create a new User object and populate it with data from the UserLoginDto
            var user = new User
            {
                Name = dto.Name,
                Email = dto.Email,
                Password = dto.Password,
            };

            return user;
        }
    }
}
