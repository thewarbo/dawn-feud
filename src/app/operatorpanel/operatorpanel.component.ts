import { Component, Input, OnInit } from '@angular/core';
import { GamestateService } from '../gamestate.service';
import { GameResponse } from '../response';

@Component({
  selector: 'app-operatorpanel',
  templateUrl: './operatorpanel.component.html',
  styleUrls: ['./operatorpanel.component.css']
})
export class OperatorpanelComponent implements OnInit {
  @Input() index: number = 0;
  @Input() answer: GameResponse = {answer: "Dawn", responses: 50};
  @Input() guessed: boolean = false;
  gamestateService: GamestateService;

  constructor(gamestateService: GamestateService) {
    this.gamestateService = gamestateService;
  }

  ngOnInit(): void {
  }
  ShowAnswer(){
    console.log("should show "+ this.answer.answer);
    this.gamestateService.guess(this.index);
  }
}
