import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { PassengerDashbordComponent } from './passenger-dashbord/passenger-dashbord.component';
import { PasseCountComponent } from './passenger-dashbord/passe-count/passe-count.component';
import { PassDetailsComponent } from './passenger-dashbord/pass-details/pass-details.component';



@NgModule({
  declarations: [
    PassengerDashbordComponent,
    PasseCountComponent,
    PassDetailsComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[PassengerDashbordComponent]
})
export class PassengerModule { }
