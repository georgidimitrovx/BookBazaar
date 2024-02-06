using BookBazaar.Server.Models;
using Microsoft.AspNetCore.Mvc;

namespace BookBazaar.Server.Controllers
{
    /*
        {
          "amount": 100.00,
          "currency": "USD",
          "paymentMethod": "credit card"
        }

        {
          "success": true,
          "message": "Payment processed successfully.",
          "transactionId": "a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6"
        }
    */

    [Route("api/[controller]")]
    [ApiController]
    public class PaymentController : ControllerBase
    {
        [HttpPost("process")]
        public IActionResult ProcessPayment([FromBody] PaymentRequest request)
        {
            // Simulate payment processing
            var random = new Random();
            var paymentSucceeded = random.Next(100) < 80; // 80% chance of success

            var response = new PaymentResponse
            {
                Success = paymentSucceeded,
                Message = paymentSucceeded ? "Payment processed successfully." : "Payment failed.",
                TransactionId = paymentSucceeded ? Guid.NewGuid().ToString() : null
            };

            return Ok(response);
        }
    }
}
