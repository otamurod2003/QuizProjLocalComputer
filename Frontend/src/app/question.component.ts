import { Component } from "@angular/core";

import { ApiService } from "./api.service";

@Component({
    templateUrl: './question.component.html',
    selector: 'question',
})
export class QuestionComponent {

    question = 
    {
        questionText: 'Savol1',
        correctAnswer:'',
        wrongAnswer1 : '',
        wrongAnswer2 : '',
        wrongAnswer3 : '',
    }
    constructor(private apisvc: ApiService){

    }
     public Post(){
        this.apisvc.postQuestion(this.question);
     }
    }