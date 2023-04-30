import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { categories, Answers } from './quiz.options';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-quiz-index',
  templateUrl: './quiz-index.component.html',
  styleUrls: ['./quiz-index.component.css']
})
export class QuizIndexComponent {
  keys: string[] = Object.keys(categories);
  categories = categories;
  level: string[];
  type: string[];
  respCategory!: string;
  respDifficulty!: string;
  respType!: string;
  question!: string;
  isLoaded: boolean = false;
  options!: string[];
  isStarted: boolean = false;
  isFinished: boolean = false;
  goToResult: boolean = false;
  count: number = 0;
  score: number = 0;

  answers: Answers[] = [];
  currectAns!: string;
  selectedAns: string = '';

  selectedCategory: string = 'default';
  selectedDifficulty: string = 'default';
  selectedType: string = 'default';

  constructor(private http: HttpClient, private QuizService: QuizService) {
    this.level = ['Easy', 'Medium', 'Hard'];
    this.type = ['Multiple Choice', 'True / False'];
  }

  startTest() {
    this.selectedAns = '';
    this.count = this.count + 1;
    if (this.count === 10) {
      this.isFinished = true;
    }
    this.isStarted = true;
    this.QuizService.fetchQuestion(
      this.selectedCategory,
      this.selectedDifficulty,
      this.selectedType
    ).subscribe((data: any) => {
      console.log();
      this.respCategory = data.results[0].category;
      this.respDifficulty = data.results[0].difficulty;
      this.respType = data.results[0].type;

      this.question = data.results[0].question;
      this.options = data.results[0].incorrect_answers;
      this.options = [...this.options, data.results[0].correct_answer];
      this.currectAns = data.results[0].correct_answer;
      for (var i = this.options.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = this.options[i];
        this.options[i] = this.options[j];
        this.options[j] = temp;
      }
      this.isLoaded = true;
    });
  }
  nextQuetion() {
    const newAnser: Answers = {
      question: this.question,
      options: this.options,
      selectedAnswer: this.selectedAns,
      correctAnswer: this.currectAns,
    };
    if (this.count <= 10) {
      this.answers.push(newAnser);
      if (this.count === 10) {
        setTimeout(() => {
          this.goToResult = true;
        }, 1000);
      }
    }
    if (this.count <= 9) {
      this.startTest();
    }
  }
}
