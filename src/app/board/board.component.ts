import { Component, OnInit } from '@angular/core';
import { GamestateService } from '../gamestate.service';
import { GameResponse } from '../response';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  bank: number = 0;
  gamestateService: GamestateService;
  answers: GameResponse[] = [];
  guessed: boolean[] = [];

  constructor(gamestateService: GamestateService){
    this.gamestateService = gamestateService;
  }

  ngOnInit() {
    this.answers = this.gamestateService.getResponses();
    this.guessed = this.gamestateService.getGuessed();
  }

  ngOnChange() {
    this.bank = this.gamestateService.bank;
  }
}
