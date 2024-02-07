using BookBazaar.Server.Data;
using BookBazaar.Server.Models;

public interface IUserService
{
    Task<IEnumerable<User>> GetAllUsersAsync();
    Task<User> GetUserByIdAsync(int id);
    Task<User> GetUserByEmailAsync(string email);
    Task<User> CreateUserAsync(User user);
    Task<User> UpdateUserAsync(User user);
    Task<User> DeleteUserAsync(int id);
    Task<bool> ExistsAsync(string email);
}

public class UserService : IUserService
{
    private readonly IUserRepository _userRepository;

    public UserService(IUserRepository userRepository)
    {
        _userRepository = userRepository;
    }

    public async Task<IEnumerable<User>> GetAllUsersAsync() => await _userRepository.GetAllAsync();

    public async Task<User> GetUserByIdAsync(int id) => await _userRepository.GetByIdAsync(id);

    public async Task<User> GetUserByEmailAsync(string email) => await _userRepository.GetByEmailAsync(email);

    public async Task<User> CreateUserAsync(User user) => await _userRepository.AddAsync(user);

    public async Task<User> UpdateUserAsync(User user) => await _userRepository.UpdateAsync(user);

    public async Task<User> DeleteUserAsync(int id) => await _userRepository.DeleteAsync(id);

    public async Task<bool> ExistsAsync(string email) => await _userRepository.ExistsAsync(email);
}
