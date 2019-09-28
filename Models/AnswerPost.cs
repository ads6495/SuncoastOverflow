using System;
using System.Collections.Generic;

namespace SuncoastOverflow.Models
{
  public class AnswerPost
  {
    public int Id { get; set; }
    public string AnswerContent { get; set; }

    public string PraisesForAnswer { get; set; }
    public DateTime DateOfPost { get; set; } = DateTime.Now;

    public int? QuestionPostId { get; set; }

    public QuestionPost QuestionPost { get; set; }

  }
}