import { Injectable } from '@angular/core';
import { Quiz } from './quiz.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
quizzes: Quiz[]=[
  {
    question:'Which is known as father of Java proramming language?', 
    answer:[
            {option:'1.James Gosling', correct:true},
            {option:'2.M.P.Java',correct:false},
            {option:'3.charel Babbage',correct:false},
            {option:'4.pascal',correct:false}
          ],
           
  
    
  },
  {
    question:'Which provides runtime environment for java byte code to be executed?', 
    answer:[{option:'1.JDK', correct:false},
            {option:'2.JRE',correct:false},
            {option:'3.JVM',correct:true},
            {option:'4.JAVAC',correct:false}
          ] 
    
  },
  {
    question:'Which of the following are not Java keywords?', 
    answer:[{option:'1.double', correct:false},
            {option:'2.switch',correct:false},
            {option:'3.then',correct:true},
            {option:'4.instanceof',correct:false}
          ] 
    
  },
  {
    question:'Which of these have highest preference?', 
    answer:[{option:'1.()', correct:true},
            {option:'2.++',correct:false},
            {option:'3.*',correct:false},
            {option:'4.>>',correct:false}
          ] 
    
  },
  {
    question:'Which of these is returned by operator &', 
    answer:[{option:'1.integer', correct:false},
            {option:'2.character',correct:true},
            {option:'3.boolean',correct:false},
            {option:'4.float',correct:false}
          ] 
    
  },
  {
    question:'Java language was initially called as', 
    answer:[{option:'1.sumatra', correct:false},
            {option:'2.oak',correct:true},
            {option:'3.J++',correct:false},
            {option:'4.pine',correct:false}
          ] 
    
  },
  {
    question:'Which one is a template for creating different objects?', 
    answer:[{option:'1.Array', correct:false},
            {option:'2.An class',correct:true},
            {option:'3.Interface',correct:false},
            {option:'4.Method',correct:false}
          ] 
    
  },
  {
    question:'What is the full form of JVM', 
    answer:[{option:'1.Java Very Large Machine', correct:false},
            {option:'2.Java Verified Machine',correct:false},
            {option:'3.Java Virtual Machine',correct:true},
            {option:'4.Java Very Small Machine',correct:false}
          ] 
    
  },
  {
    question:'Which of the following are not Java Modifiers?', 
    answer:[{option:'1.friendly', correct:true},
            {option:'2.public',correct:false},
            {option:'3.private',correct:false},
            {option:'4.protected',correct:false}
          ] 
    
  },
  {
    question:'What feature of OOP has a super class sub class concept', 
    answer:[{option:'1.Hierarchical inheritance', correct:true},
            {option:'2.Single inheritance',correct:false},
            {option:'3.Multiple inheritance',correct:false},
            {option:'4.Multilevel inheritance',correct:false}
          ] 
    
  }
  
]
  constructor() { } 
  getQuizzes()
  {
    return this.quizzes;
  }
}

