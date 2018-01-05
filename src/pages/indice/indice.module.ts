import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IndicePage } from './indice';

@NgModule({
  declarations: [
    IndicePage,
  ],
  imports: [
    IonicPageModule.forChild(IndicePage),
  ],
})
export class IndicePageModule {}
