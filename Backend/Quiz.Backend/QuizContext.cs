using Microsoft.EntityFrameworkCore;
using Quiz.Backend.Models;

namespace Quiz.Backend
{
    public class QuizContext : DbContext
    {
        public QuizContext(DbContextOptions<QuizContext> options) : base(options)
        {

        }
        public DbSet<Question> Questions { get; set; }
    }
}
