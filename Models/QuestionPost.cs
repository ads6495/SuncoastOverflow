
using System;
using System.Collections.Generic;

namespace SuncoastOverflow.Models
{
  public class QuestionPost
  {
    public int Id { get; set; }
    public string Description { get; set; }
    public string Content { get; set; }
    public int PraisesForQuestion { get; set; }
    public DateTime DateOfPost { get; set; } = DateTime.Now;

    public List<AnswerPost> AnswerPost { get; set; } = new List<AnswerPost>();
  }
}