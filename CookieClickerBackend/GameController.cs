using Microsoft.AspNetCore.Mvc;

[Route("api/[controller]")]
[ApiController]
public class GameController : ControllerBase
{
    private static int cookieCount = 0;

    [HttpPost("click")]
    public IActionResult clickCookie()
    {
        cookieCount++;
        Console.WriteLine("cookieCount:" +cookieCount);
        return Ok(new { cookieCount });
    }

    [HttpGet("stats")]
    public IActionResult refreshStats()
    {
        return Ok(new { cookieCount });
    }
}
