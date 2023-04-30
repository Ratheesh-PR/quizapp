import { Component, Input, OnInit } from '@angular/core';
import { Answers } from '../quiz-index/quiz.options';

@Component({
  selector: 'app-quiz-result',
  templateUrl: './quiz-result.component.html',
  styleUrls: ['./quiz-result.component.css'],
})
export class QuizResultComponent implements OnInit {
  @Input() results!: Answers[];
  score: number = 0;
  percentage: number = 0;

  constructor() {}

  ngOnInit(): void {
    for (let result of this.results) {
      if (result.selectedAnswer === result.correctAnswer) {
        this.score = this.score + 1;
      }
    }
    this.percentage = (this.score / 10) * 100;
  }

  convert(originalString: any) {
    return originalString;
  }
}
