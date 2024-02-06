﻿namespace BookBazaar.Server.Models
{
    public class UserRegistrationDto
    {
        public required string Name { get; set; }
        public required string Email { get; set; }
        public required string Password { get; set; }

        public bool IsValid()
        {
            return true;
        }
    }
}
