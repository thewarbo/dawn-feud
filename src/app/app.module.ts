import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { OperatorComponent } from './operator/operator.component';
import { PanelComponent } from './panel/panel.component';
import { AnswerpanelComponent } from './answerpanel/answerpanel.component';
import { OperatorpanelComponent } from './operatorpanel/operatorpanel.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    OperatorComponent,
    PanelComponent,
    AnswerpanelComponent,
    OperatorpanelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
