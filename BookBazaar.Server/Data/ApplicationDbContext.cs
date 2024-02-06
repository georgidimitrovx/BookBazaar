using BookBazaar.Server.Models;
using Microsoft.EntityFrameworkCore;

namespace BookBazaar.Server.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Book> Books { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderItem> OrderItems { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Order>()
                .HasOne(o => o.User) // One side
                .WithMany(u => u.Orders) // Many side
                .HasForeignKey(o => o.UserId); // Foreign key

            modelBuilder.Entity<OrderItem>()
                .HasKey(oi => new { oi.OrderId, oi.BookId }); // Composite key

            modelBuilder.Entity<OrderItem>()
                .HasOne(oi => oi.Order)
                .WithMany(o => o.OrderItems)
                .HasForeignKey(oi => oi.OrderId);

            modelBuilder.Entity<OrderItem>()
                .HasOne(oi => oi.Book)
                .WithMany() // Assuming Book doesn't directly reference OrderItems
                .HasForeignKey(oi => oi.BookId);
        }
    }
}
