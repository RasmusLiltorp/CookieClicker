using Microsoft.AspNetCore.Mvc;
namespace CookieClickerBackend;

[Route("api/[controller]")]
[ApiController]


public class GameController : ControllerBase
{
    public static int cookieCount = 0;
    public int numberOfGrandmas;

    [HttpPost("click")]
    public IActionResult clickCookie()
    {
        cookieCount++;
        Console.WriteLine("cookieCount:" +cookieCount);
        return Ok(new { cookieCount });
    }

    [HttpPost("purchaseGrandma")]
    public IActionResult buyGrandma()
    {
        int numberOfGrandmas = Shop.PurchaseGrandma();
        return Ok(new { numberOfGrandmas });
    }

    [HttpGet("stats")]
    public IActionResult refreshStats()
    {
        return Ok(new { cookieCount });
    }
}
