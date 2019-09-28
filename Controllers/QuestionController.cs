using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using suncoastoverflow;
using SuncoastOverflow.Models;
using static Microsoft.AspNetCore.Hosting.Internal.HostingApplication;

namespace SuncoastOverflow.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class QuestionController : ControllerBase
  {
    private DatabaseContext context;
    public QuestionController(DatabaseContext _context)
    {
      this.context = _context;
    }
    [HttpGet("GetAll")]
    public ActionResult<IEnumerable<QuestionPost>> GetAll()
    {
      var AllQuestions = context.QuestionPosts.OrderBy(q => q.Id);
      return AllQuestions.ToList();
    }



    [HttpGet(AllAnswersJoin{Id})]
    public ActionResult<IEnumerable<Object>> GetAnswers(Id)
  {
    var QuestionReturned = Context.QuestionPosts.Join(context.AnswerPosts, i => i.Id, l => l.QuestionPostId, (i, l) => new
    {

      QuestionId = i.Id,
      QuestionDescription = i.Description,


    })

    }





}
}