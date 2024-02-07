using BookBazaar.Server.Data;
using BookBazaar.Server.Models;

namespace BookBazaar.Server.Services
{
    public interface IBookService
    {
        Task<IEnumerable<Book>> GetAllBooksAsync();
        Task<IEnumerable<Book>> GetAllBooksByCategoryAsync(string category);
        Task<Book> GetBookByIdAsync(int id);
        Task<Book> CreateBookAsync(Book book);
        Task<Book> UpdateBookAsync(Book book);
        Task<Book> DeleteBookAsync(int id);
        Task<IEnumerable<Book>> FindByTitleAsync(string title);
        Task<IEnumerable<Book>> FindByAuthorAsync(string author);
        Task<IEnumerable<Book>> FindByGenreAsync(string genre);
    }

    public class BookService : IBookService
    {
        private readonly IBookRepository _bookRepository;

        public BookService(IBookRepository bookRepository)
        {
            _bookRepository = bookRepository;
        }

        public async Task<IEnumerable<Book>> GetAllBooksAsync() => await _bookRepository.GetAllAsync();
        public async Task<IEnumerable<Book>> GetAllBooksByCategoryAsync(string category)
            => await _bookRepository.GetAllByCategoryAsync(category);

        public async Task<Book> GetBookByIdAsync(int id) => await _bookRepository.GetByIdAsync(id);

        public async Task<Book> CreateBookAsync(Book book) => await _bookRepository.AddAsync(book);

        public async Task<Book> UpdateBookAsync(Book book) => await _bookRepository.UpdateAsync(book);

        public async Task<Book> DeleteBookAsync(int id) => await _bookRepository.DeleteAsync(id);

        public async Task<IEnumerable<Book>> FindByTitleAsync(string title) =>
            await _bookRepository.FindByTitleAsync(title);

        public async Task<IEnumerable<Book>> FindByAuthorAsync(string author) =>
            await _bookRepository.FindByAuthorAsync(author);

        public async Task<IEnumerable<Book>> FindByGenreAsync(string genre) =>
            await _bookRepository.FindByGenreAsync(genre);
    }

}
