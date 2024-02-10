using BookBazaar.Server.Controllers;
using BookBazaar.Server.Models;
using BookBazaar.Server.Services;
using Microsoft.AspNetCore.Mvc;
using Moq;

public class BookControllerTests
{
    [Fact]
    public async Task Get_ReturnsNotFound_WhenBookNotFound()
    {
        // Arrange
        var mockService = new Mock<IBookService>();
        mockService.Setup(service => service.GetBookByIdAsync(It.IsAny<int>()))
                   .ReturnsAsync((Book)null);
        var controller = new BookController(mockService.Object);

        // Act
        var result = await controller.Get(1);

        // Assert
        Assert.IsType<NotFoundResult>(result.Result);
    }

    [Fact]
    public async Task Get_ReturnsOkResult_WhenBookFound()
    {
        // Arrange
        var mockService = new Mock<IBookService>();
        var book = new Book { Id = 1, Title = "Sample Book" };
        mockService.Setup(service => service.GetBookByIdAsync(1))
                   .ReturnsAsync(book);
        var controller = new BookController(mockService.Object);

        // Act
        var result = await controller.Get(1);

        // Assert
        var okResult = Assert.IsType<OkObjectResult>(result.Result);
        var returnedBook = Assert.IsType<Book>(okResult.Value);
        Assert.Equal(book, returnedBook);
    }
}
