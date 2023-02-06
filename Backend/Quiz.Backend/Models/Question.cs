using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Quiz.Backend.Models
{
    public class Question
    {
        public long Id { get; set; }
        public string questionText { get; set; } //Savol matni
        public string correctAnswer { get; set; } //Togri javob

        [NotMapped]
        public string wrongAnswer1 { get; set; } //Notogri javob

        [NotMapped]
        public string wrongAnswer2 { get; set; } //Notogri javob

        [NotMapped]
        public string wrongAnswer3 { get; set; } //Notogri javob


        public string wrongAnswerString { get; set; } // birlashgan Notogri javoblar




    }
}
