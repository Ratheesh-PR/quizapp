import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizIndexComponent } from './components/quiz/quiz-index/quiz-index.component';

const routes: Routes = [
  {
    path: '',
    component: QuizIndexComponent,
  },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
