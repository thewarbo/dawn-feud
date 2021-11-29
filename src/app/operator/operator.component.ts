import { Component, OnInit } from '@angular/core';
import { GamestateService } from '../gamestate.service';
import { GameResponse } from '../response';

@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.css']
})
export class OperatorComponent implements OnInit {
  private gamestateService: GamestateService;
  question: string = "";
  answers: GameResponse[] = [];
  guessed: boolean[] = []

  constructor(gamestateService: GamestateService) { 
    this.gamestateService = gamestateService;
  }

  ngOnInit(): void {
    this.question = this.gamestateService.getQuestion();
    this.answers = this.gamestateService.getResponses();
    this.guessed = this.gamestateService.getGuessed();
  }



}
