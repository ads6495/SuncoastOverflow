using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using suncoastoverflow;
using SuncoastOverflow.Models;
using Microsoft.EntityFrameworkCore;

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

    [HttpGet("AllAnswersJoin{Id}")]
    public ActionResult<IEnumerable<Object>> GetAnswers(int Id)
    {
      var QuestionReturned = context.QuestionPosts.Join(context.AnswerPosts, i => i.Id, l => l.QuestionPostId, (i, l) => new
      {

        QuestionId = i.Id,
        QuestionDescription = i.Description,
        QuestionContent = i.Content,
        QuestionDate = i.DateOfPost,
        QuestionPraise = i.PraisesForQuestion,
        AnswerId = l.AnswerContent,
        AnswerContent = l.AnswerContent,
        AnswerPraise = l.PraisesForAnswer,
        AnswerDate = l.DateOfPost,
      }
      ).Where(s => s.QuestionId == Id);
      return QuestionReturned.ToList();
    }

    [HttpPost("CreteQuestion")]
    public ActionResult<QuestionPost> CreatePost([FromBody]QuestionPost entry)
    {
      context.QuestionPosts.Add(entry);
      context.SaveChanges();
      return entry;
    }

    [HttpGet("question{Id}")]
    public ActionResult<IEnumerable<QuestionPost>> GetOneQuestion(int Id)
    {
      var post = context.QuestionPosts.Where(i => i.Id == Id);
      return post.ToList();
    }
  }
}