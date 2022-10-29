import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GameOfLifeComponent } from './game-of-life/game-of-life.component';
import { MatrixComponent } from './game-of-life/matrix/matrix.component';
import { ToggleComponent } from './game-of-life/toggle/toggle.component';
import { ParametersComponent } from './game-of-life/parameters/parameters.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    GameOfLifeComponent,
    MatrixComponent,
    ToggleComponent,
    ParametersComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
