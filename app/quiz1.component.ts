import { Component, OnInit } from '@angular/core';
import { Quiz } from '../quiz.model';
import { Quiz1Service } from '../quiz1.service';

@Component({
  selector: 'app-quiz1',
  templateUrl: './quiz1.component.html',
  styleUrls: ['./quiz1.component.css']
})
export class Quiz1Component implements OnInit {

  quizzes1:Quiz[]=[];
  currentQuiz=0;
  lastoption=0;
  answerSelected=false;
  correctAnswers=0;
  incorrectAnswers=0;
  result=false;
  constructor(private quiz1service:Quiz1Service) {
   }

  ngOnInit():void { 
    this.quizzes1=this.quiz1service.getQuizzes();
  }
  previous()
  {
    if(this.currentQuiz!=0)
      this.currentQuiz--;
    if(this.lastoption == 1)
      this.correctAnswers--;
    else
      this.incorrectAnswers--; 

  }
  next()
  {
    if(this.currentQuiz!=10)
      this.currentQuiz++;
      
  }
  onAnswer(option:boolean) 
  {
    console.log(option);
    this.answerSelected=true;
    setTimeout(()=>{
      this.currentQuiz++;

      this.answerSelected=false;

    },100); 

    if(option){
      this.lastoption=1;
      this.correctAnswers++;
    }else{
      this.lastoption=0;
      this.incorrectAnswers++;
    }

  }
  showResult()
  {
    this.result=true;
  }
}


