import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';


import { MyApp } from './app.component';
import { PrologoPage } from '../pages/prologo/prologo';
import { IndicePage } from '../pages/indice/indice';
import { AgradecimientosPage } from '../pages/agradecimientos/agradecimientos';
import { AutoresPage } from '../pages/autores/autores';
import { Cap1Page } from '../pages/cap1/cap1';
import { Cap2Page } from '../pages/cap2/cap2';
import { Cap3Page } from '../pages/cap3/cap3';
import { Cap4Page } from '../pages/cap4/cap4';
import { Cap5Page } from '../pages/cap5/cap5';
import { Cap6Page } from '../pages/cap6/cap6';
import { Cap7Page } from '../pages/cap7/cap7';
import { Cap8Page } from '../pages/cap8/cap8';
import { Cap9Page } from '../pages/cap9/cap9';
import { Cap10Page } from '../pages/cap10/cap10';
import { Cap11Page } from '../pages/cap11/cap11';
import { Cap12Page } from '../pages/cap12/cap12';
import { Cap13Page } from '../pages/cap13/cap13';
import { Cap14Page } from '../pages/cap14/cap14';
import { Cap15Page } from '../pages/cap15/cap15';
import { Cap16Page } from '../pages/cap16/cap16';
import { Cap17Page } from '../pages/cap17/cap17';
import { Cap18Page } from '../pages/cap18/cap18';
import { Cap19Page } from '../pages/cap19/cap19';
import { Cap20Page } from '../pages/cap20/cap20';
import { Cap21Page } from '../pages/cap21/cap21';
import { Cap22Page } from '../pages/cap22/cap22';
import { Cap23Page } from '../pages/cap23/cap23';
import { Cap24Page } from '../pages/cap24/cap24';
import { Cap25Page } from '../pages/cap25/cap25';




import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { InAppBrowser } from '@ionic-native/in-app-browser';


@NgModule({
  declarations: [
    MyApp,
    IndicePage,
    PrologoPage,    
    AgradecimientosPage,
    AutoresPage,
    Cap1Page,
    Cap2Page,
    Cap3Page,
    Cap4Page,
    Cap5Page,
    Cap6Page,
    Cap7Page,
    Cap8Page,
    Cap9Page,
    Cap10Page,
    Cap11Page,
    Cap12Page,
    Cap13Page,
    Cap14Page,
    Cap15Page,
    Cap16Page,
    Cap17Page,
    Cap18Page,
    Cap19Page,
    Cap20Page,
    Cap21Page,
    Cap22Page,
    Cap23Page,
    Cap24Page,
    Cap25Page
  ],
  imports: [
    BrowserModule, PdfViewerModule, 
    IonicModule.forRoot(MyApp, {})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    IndicePage,
    PrologoPage,
    AgradecimientosPage,
    AutoresPage,
    Cap1Page,
    Cap2Page,
    Cap3Page,
    Cap4Page,
    Cap5Page,
    Cap6Page,
    Cap7Page,
    Cap8Page,
    Cap9Page,
    Cap10Page,
    Cap11Page,
    Cap12Page,
    Cap13Page,
    Cap14Page,
    Cap15Page,
    Cap16Page,
    Cap17Page,
    Cap18Page,
    Cap19Page,
    Cap20Page,
    Cap21Page,
    Cap22Page,
    Cap23Page,
    Cap24Page,
    Cap25Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

