import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GameOfLifeComponent } from './game-of-life/game-of-life.component';
import { MatrixComponent } from './game-of-life/matrix/matrix.component';
import { ToggleComponent } from './game-of-life/toggle/toggle.component';
import { ParametersComponent } from './game-of-life/parameters/parameters.component';

@NgModule({
  declarations: [
    AppComponent,
    GameOfLifeComponent,
    MatrixComponent,
    ToggleComponent,
    ParametersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
