using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using suncoastoverflow;
using SuncoastOverflow.Models;


namespace SuncoastOverflow.Controllers
{
  [Route("api/controller")]
  [ApiController]
  public class AnswerController : ControllerBase
  {
    private DatabaseContext context;

    public AnswerController(DatabaseContext _context)
    {
      this.context = _context;
    }

    [HttpPost("CreateAnswer")]
    public ActionResult<AnswerPost> CreateAnswer([FromBody]AnswerPost entry)
    {
      context.AnswerPosts.Add(entry);
      context.SaveChanges();
      return entry;
    }

    [HttpPost("AllAnswers")]
    public ActionResult<IEnumerable<AnswerPost>> GetAll()
    {
      var all = context.AnswerPosts.OrderBy(a => a.Id);
      return all.ToList();
    }
  }
}