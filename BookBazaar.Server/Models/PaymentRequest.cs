namespace BookBazaar.Server.Models
{
    public class PaymentRequest
    {
        public decimal Amount { get; set; }
        public string Currency { get; set; }
        public string PaymentMethod { get; set; } // e.g., credit card, PayPal
    }
}
