using BookBazaar.Server.Models;
using BookBazaar.Server.Services;
using Microsoft.AspNetCore.Mvc;

namespace BookBazaar.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly IOrderService _orderService;

        public OrderController(IOrderService orderService)
        {
            _orderService = orderService;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Order>> Get(int id)
        {
            var order = await _orderService.GetOrder(id);
            if (order == null) return NotFound();
            return Ok(order);
        }

        [HttpPost]
        public async Task<ActionResult<Order>> Post([FromBody] Order order)
        {
            var createdOrder = await _orderService.CreateOrderAsync(order);
            return CreatedAtAction(nameof(Get), new { id = createdOrder.Id }, createdOrder);
        }

        [HttpPost]
        public async Task<ActionResult<Order>> Post([FromBody] OrderItem orderItem)
        {
            var createdOrderItem = await _orderService.CreateOrderItemAsync(orderItem);
            return CreatedAtAction(nameof(Get), new { id = createdOrderItem.Id }, createdOrderItem);
        }

        // todo
        //Task<Order> PlaceOrderAsync(int orderId);
        //Task<IEnumerable<Order>> GetUserOrders(int userId);
    }
}
