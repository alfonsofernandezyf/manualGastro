import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Cap2Page } from './cap2';

@NgModule({
  declarations: [
    Cap2Page,
  ],
  imports: [
    IonicPageModule.forChild(Cap2Page),
  ],
  exports: [Cap2Page]
  
})
export class Cap2PageModule {}
