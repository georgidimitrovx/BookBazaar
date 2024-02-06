using BookBazaar.Server.Models;
using Humanizer.Localisation;
using Microsoft.EntityFrameworkCore;

namespace BookBazaar.Server.Data
{
    public interface IBookRepository
    {
        Task<IEnumerable<Book>> GetAllAsync();
        Task<Book> GetByIdAsync(int id);
        Task<Book> AddAsync(Book book);
        Task<Book> UpdateAsync(Book book);
        Task<Book> DeleteAsync(int id);
        Task<IEnumerable<Book>> FindByTitleAsync(string title);
        Task<IEnumerable<Book>> FindByAuthorAsync(string author);
        Task<IEnumerable<Book>> FindByGenreAsync(string genre);
    }

    public class BookRepository : IBookRepository
    {
        private readonly ApplicationDbContext _context;

        public BookRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Book>> GetAllAsync() => await _context.Books.ToListAsync();

        public async Task<Book> GetByIdAsync(int id) => await _context.Books.FindAsync(id);

        public async Task<Book> AddAsync(Book book)
        {
            _context.Books.Add(book);
            await _context.SaveChangesAsync();
            return book;
        }

        public async Task<Book> UpdateAsync(Book book)
        {
            _context.Books.Update(book);
            await _context.SaveChangesAsync();
            return book;
        }

        public async Task<Book> DeleteAsync(int id)
        {
            var book = await _context.Books.FindAsync(id);
            if (book != null)
            {
                _context.Books.Remove(book);
                await _context.SaveChangesAsync();
            }
            return book;
        }

        public async Task<IEnumerable<Book>> FindByTitleAsync(string title)
        {
            return await _context.Books
                .Where(book => book.Title.ToLower().Contains(title.ToLower()))
                .ToListAsync();
        }

        public async Task<IEnumerable<Book>> FindByAuthorAsync(string author)
        {
            return await _context.Books
                .Where(book => book.Author.ToLower().Contains(author.ToLower()))
                .ToListAsync();
        }

        public async Task<IEnumerable<Book>> FindByGenreAsync(string genre)
        {
            return await _context.Books
                .Where(book => book.Genre.ToLower().Contains(genre.ToLower()))
                .ToListAsync();
        }
    }

}
