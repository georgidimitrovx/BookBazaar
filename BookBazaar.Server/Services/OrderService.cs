using BookBazaar.Server.Models;

namespace BookBazaar.Server.Services
{
    public interface IOrderService
    {
        // todo remove order
        // todo update/remove orderitem from order

        Task<Order> CreateOrderAsync(Order order);
        Task<OrderItem> CreateOrderItemAsync(OrderItem order);
        Task<Order> PlaceOrderAsync(int orderId);
        Task<IEnumerable<Order>> GetUserOrders(int userId);
        Task<Order> GetOrder(int orderId);
    }

    // todo implement
    public class OrderService : IOrderService
    {
        public Task<Order> CreateOrderAsync(Order order)
        {
            throw new NotImplementedException();
        }

        public Task<OrderItem> CreateOrderItemAsync(OrderItem order)
        {
            throw new NotImplementedException();
        }

        public Task<Order> GetOrder(int orderId)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<Order>> GetUserOrders(int userId)
        {
            throw new NotImplementedException();
        }

        public Task<Order> PlaceOrderAsync(int orderId)
        {
            throw new NotImplementedException();
        }
    }
}
