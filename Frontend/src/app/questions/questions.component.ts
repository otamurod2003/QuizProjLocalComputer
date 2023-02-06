import { Component } from "@angular/core";

import { ApiService } from "../api.service";

@Component({
    templateUrl: './questions.component.html',
    selector: 'questions',
})
export class QuestionsComponent
{
  questions:any;
  constructor(private apisvc: ApiService){ }

    ngOnInit(){
      this.apisvc.getQuestions().subscribe(result => {
        this.questions = result;
      })
    }  
      
}
      
