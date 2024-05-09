import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { CalculateComponent } from './calculate/calculate.component';

const routes: Routes = [

  { path: "dash", component: DashBoardComponent},
  { path: "calculate", component: CalculateComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
