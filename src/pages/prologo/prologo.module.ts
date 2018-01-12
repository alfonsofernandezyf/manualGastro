import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrologoPage } from './prologo';

@NgModule({
  declarations: [
    PrologoPage,
  ],
  imports: [
    IonicPageModule.forChild(PrologoPage),
  ],
  exports:[PrologoPage]
  
})
export class PrologoPageModule {}
