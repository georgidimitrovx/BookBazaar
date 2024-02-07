namespace BookBazaar.Server.Models
{
    public class Book
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Author { get; set; }
        public string Genre { get; set; }
        public decimal Price { get; set; }
        public string ISBN { get; set; }
        public int Inventory { get; set; }
        public string CoverImageUrl { get; set; }
        public string Category { get; set; }

        public Book()
        {
            Title = string.Empty;
            Description = string.Empty;
            Author = string.Empty;
            Genre = string.Empty;
            ISBN = string.Empty;
            CoverImageUrl = string.Empty;
            Category = string.Empty;
        }
    }
}
