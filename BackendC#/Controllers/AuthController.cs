using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace BackGreenPlus.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        [AllowAnonymous]
        [HttpPost("login")]
        public IActionResult Login([FromBody] AuthRequest request)
        {
            if (request.Username == "admin" && request.Password == "admin")
            {
                return Ok(new { token = "7845172ghjdfa675182tgujhe" });
            }
            return Unauthorized();
        }
    }

    public class AuthRequest
    {
        public string Username { get; set; }
        public string Password { get; set; }
    }
}
