using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Quiz.Backend.Models;

namespace Quiz.Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuestionController : ControllerBase
    {
        private readonly QuizContext _context;
        public QuestionController(QuizContext context)
        {
            _context = context;
        }

        [HttpPost]
        public void Post([FromBody] Question question)
        {
           question.wrongAnswerString =  string.Join(",", question.wrongAnswer1,question.wrongAnswer2,question.wrongAnswer3);
           _context.Questions.Add(question);
           _context.SaveChanges();
        }
        [HttpGet]
        public ActionResult<IEnumerable<Question>> Get()
        {
            return _context.Questions;
        }
       
    }
}