using BookBazaar.Server.Models;
using Humanizer.Localisation;
using Microsoft.EntityFrameworkCore;

namespace BookBazaar.Server.Data
{
    public interface IOrderItemRepository
    {
        Task<OrderItem> GetByIdAsync(int id);
        Task<OrderItem> AddAsync(OrderItem orderItem);
        Task<OrderItem> UpdateAsync(OrderItem orderItem);
        Task<OrderItem> DeleteAsync(int id);
    }

    public class OrderItemRepository : IOrderItemRepository
    {
        private readonly ApplicationDbContext _context;

        public OrderItemRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<OrderItem> GetByIdAsync(int id) => 
            await _context.OrderItems.FindAsync(id);

        public async Task<OrderItem> AddAsync(OrderItem orderItem)
        {
            _context.OrderItems.Add(orderItem);
            await _context.SaveChangesAsync();
            return orderItem;
        }

        public async Task<OrderItem> UpdateAsync(OrderItem orderItem)
        {
            _context.OrderItems.Update(orderItem);
            await _context.SaveChangesAsync();
            return orderItem;
        }

        public async Task<OrderItem> DeleteAsync(int id)
        {
            var orderItem = await _context.OrderItems.FindAsync(id);
            if (orderItem != null)
            {
                _context.OrderItems.Remove(orderItem);
                await _context.SaveChangesAsync();
            }
            return orderItem;
        }
    }
}
