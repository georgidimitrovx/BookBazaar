namespace BookBazaar.Server.Models
{
    public class Order
    {
        public int Id { get; set; }
        public int Status { get; set; }
        public DateTime Date { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }
        public ICollection<OrderItem> OrderItems { get; set; }

        public Order()
        {
            User = new User();
            OrderItems = new List<OrderItem>();
        }
    }

    public class OrderItem
    {
        public int Id { get; set; }
        public int OrderId { get; set; }
        public int BookId { get; set; }
        public int Quantity { get; set; }
        public decimal PriceAtPurchase { get; set; }
        public Order Order { get; set; }
        public Book Book { get; set; }

        public OrderItem()
        {
            Order = new Order();
            Book = new Book();
        }
    }
}
