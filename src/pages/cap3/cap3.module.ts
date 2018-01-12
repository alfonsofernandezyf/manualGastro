import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Cap3Page } from './cap3';

@NgModule({
  declarations: [
    Cap3Page,
  ],
  imports: [
    IonicPageModule.forChild(Cap3Page),
  ],
  exports: [Cap3Page]
  
})
export class Cap3PageModule {}
