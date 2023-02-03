import { Component } from "@angular/core";

import { ApiService } from "./api.service";

@Component({
    templateUrl: './question.component.html',
    selector: 'question',
})
export class QuestionComponent {
    question = {
        text: '',
    }
    constructor(private apisvc: ApiService){

    }
     public Post(){
        this.apisvc.postQuestion(this.question);
     }
    }