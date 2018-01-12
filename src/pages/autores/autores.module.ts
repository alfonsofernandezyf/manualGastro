import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AutoresPage } from './autores';

@NgModule({
  declarations: [
    AutoresPage,
  ],
  imports: [
    IonicPageModule.forChild(AutoresPage),
  ],
  exports:[AutoresPage]
})
export class AutoresPageModule {}
