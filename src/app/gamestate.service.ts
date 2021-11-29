import { Injectable } from '@angular/core';
import { GameResponse } from './response';

@Injectable({
  providedIn: 'root'
})
export class GamestateService {
  question: string = "We asked 200 chat members to name a shift, and they just so happened to answer in a way that made the display nice";
  answers: GameResponse[] = [{answer: "Dawn", responses: 50},
  {answer: "Alpha", responses: 40},{answer: "Night", responses: 30},{answer: "Zeta", responses:20},
{answer: "Omega", responses: 10}];
  guessed: boolean[] = [false, false, false, false];
  bank: number;

  constructor() {
    this.bank = 0;
  }

  getQuestion() {
    return this.question;
  }

  getResponses() {
    return this.answers;
  }

  getGuessed() {
    return this.guessed;
  }

  guess(index: number){
    this.guessed[index] = true;
    this.bank += this.answers[index].responses;
  }
}
