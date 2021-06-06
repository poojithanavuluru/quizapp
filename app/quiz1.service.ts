import { Injectable } from '@angular/core';
import { Quiz } from './quiz.model';

@Injectable({
  providedIn: 'root'
})
export class Quiz1Service {

  quizzes1: Quiz[]=[
    {
      question:'HTML stands for?', 
      answer:[
              {option:'1.HighText Machine Language', correct:false},
              {option:'2.Hyper Text Machine Language',correct:false},
              {option:'3.Hyper Text Markup Language',correct:true},
              {option:'4.none',correct:false}
            ],
             
    
      
    },
    {
      question:'The correct sequence of HTML tags for starting a webpage is', 
      answer:[{option:'1.Head,Title,HTML,Body', correct:false},
              {option:'2.HTML,Body,Title,Head',correct:false},
              {option:'3.HTML,Head,Title,Body',correct:false},
              {option:'4.HTML,Head,Title,Body',correct:true}
            ] 
      
    },
    {
      question:'Which of the following tag is used to insert a line-break in HTML?', 
      answer:[{option:'1.<br>', correct:true},
              {option:'2.<a>',correct:false},
              {option:'3.<pre>',correct:false},
              {option:'4.<b>',correct:false}
            ] 
      
    },
    {
      question:'Which of the following tag is used for inserting the largest heading in HTML?', 
      answer:[{option:'1.<h3>', correct:false},
              {option:'2.<h1>',correct:true},
              {option:'3.<h5>',correct:false},
              {option:'4.<h6>',correct:false}
            ] 
      
    },
    {
      question:'How to create an unordered list (a list with the list items in bullets) in HTML?', 
      answer:[{option:'1.<ul>', correct:true},
              {option:'2.<ol>',correct:false},
              {option:'3.<li>',correct:false},
              {option:'4.<i>',correct:false}
            ] 
      
    },
    {
      question:'Which character is used to represent the closing of a tag in HTML? ', 
      answer:[{option:'1. \ ', correct:false},
              {option:'2. !',correct:false},
              {option:'3. / ',correct:true},
              {option:'4. .',correct:false}
            ] 
      
    },
    {
      question:'How to create an ordered list (a list with the list items in numbers) in HTML?', 
      answer:[{option:'1.<ul>', correct:false},
              {option:'2.<ol>',correct:true},
              {option:'3.<li>',correct:false},
              {option:'4.<i>',correct:false}
            ] 
      
    },
    {
      question:'Which of the following elemnt is responsible for making the text italic in HTML?', 
      answer:[{option:'1.<i>', correct:true},
              {option:'2.<italic>',correct:false},
              {option:'3.<it>',correct:false},
              {option:'4.<pre>',correct:false}
            ] 
      
    },
    {
      question:'The tags in HTML are ?', 
      answer:[{option:'1.not case sensitive', correct:true},
              {option:'2.in uppercase',correct:false},
              {option:'3.case sensitive',correct:false},
              {option:'4.in lowercase',correct:false}
            ] 
      
    },
    {
      question:'<input> is', 
      answer:[{option:'1.a format tag', correct:false},
              {option:'2.empty tag',correct:true},
              {option:'3.both',correct:false},
              {option:'4.none',correct:false}
            ] 
      
    }
    
  ]
    constructor() { } 
    getQuizzes()
    {
      return this.quizzes1;
    }
  }
  

