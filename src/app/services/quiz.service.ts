import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class QuizService {
  constructor(private http: HttpClient) {}

  fetchQuestion(category: string, difficulty: string, type: any) {
    let params = new HttpParams().set('amount', 1).set('type', 'multiple');
    if (category !== 'default') {
      params = params.set('category', category);
    }
    if (difficulty !== 'default') {
      params = params.set('difficulty', difficulty.toLowerCase());
    }
    const url = 'https://opentdb.com/api.php';

    return this.http.get(url, { params });
  }
}
