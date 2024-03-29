using BookBazaar.Server.Models;
using BookBazaar.Server.Services;
using Microsoft.AspNetCore.Mvc;

namespace BookBazaar.Server.Controllers
{
    //[Authorize] // todo add again
    [Route("api/[controller]")]
    [ApiController]
    public class BookController : ControllerBase
    {
        private readonly IBookService _bookService;

        public BookController(IBookService bookService)
        {
            _bookService = bookService;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Book>> Get(int id)
        {
            var book = await _bookService.GetBookByIdAsync(id);
            if (book == null) return NotFound();
            return Ok(book);
        }

        [HttpGet("category/{category}")]
        public async Task<ActionResult> GetCategory(string category)
        {
            return Ok(await _bookService.GetAllBooksByCategoryAsync(category));
        }

        [HttpGet("search/{value}")]
        public async Task<ActionResult> GetSearch(string value)
        {
            return Ok(await _bookService.FindByTitleAsync(value));
        }

        [HttpGet("genre/{value}")]
        public async Task<ActionResult> GetGenre(string value)
        {
            return Ok(await _bookService.FindByGenreAsync(value));
        }

        [HttpPost]
        public async Task<ActionResult<Book>> Post([FromBody] Book book)
        {
            var createdBook = await _bookService.CreateBookAsync(book);
            return CreatedAtAction(nameof(Get), new { id = createdBook.Id }, createdBook);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Book>> Put(int id, [FromBody] Book book)
        {
            if (id != book.Id) return BadRequest();

            await _bookService.UpdateBookAsync(book);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            await _bookService.DeleteBookAsync(id);
            return NoContent();
        }
    }
}
