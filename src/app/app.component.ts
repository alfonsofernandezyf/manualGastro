import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { InAppBrowser } from '@ionic-native/in-app-browser';



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







@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = IndicePage;

  pages: Array<{title: string, component: any}>;

  constructor(private iab: InAppBrowser, public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Índice completo', component: IndicePage },
      { title: 'Agradecimientos', component: AgradecimientosPage },
      { title: 'Autores y coautores', component: AutoresPage },
      { title: 'Prologo', component: PrologoPage },
      { title: 'Capítulo 1', component: Cap1Page },
      { title: 'Capítulo 2', component: Cap2Page },      
      { title: 'Capítulo 3', component: Cap3Page },
      { title: 'Capítulo 4', component: Cap4Page },
      { title: 'Capítulo 5', component: Cap5Page },    
      { title: 'Capítulo 6', component: Cap6Page },    
      { title: 'Capítulo 7', component: Cap7Page },    
      { title: 'Capítulo 8', component: Cap8Page },    
      { title: 'Capítulo 9', component: Cap9Page },        
      { title: 'Capítulo 10', component: Cap10Page },    
      { title: 'Capítulo 11', component: Cap11Page },    
      { title: 'Capítulo 12', component: Cap12Page },    
      { title: 'Capítulo 13', component: Cap13Page },    
      { title: 'Capítulo 14', component: Cap14Page },    
      { title: 'Capítulo 15', component: Cap15Page },    
      { title: 'Capítulo 16', component: Cap16Page },    
      { title: 'Capítulo 17', component: Cap17Page },    
      { title: 'Capítulo 18', component: Cap18Page },    
      { title: 'Capítulo 19', component: Cap19Page },    
      { title: 'Capítulo 20', component: Cap20Page },    
      { title: 'Capítulo 21', component: Cap21Page },    
      { title: 'Capítulo 22', component: Cap22Page },    
      { title: 'Capítulo 23', component: Cap23Page },    
      { title: 'Capítulo 24', component: Cap24Page },    
      { title: 'Índice de materias', component: Cap25Page },    

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

 

  OpenUrl(){
    const browser = this.iab.create('http://www.senosiain.com.mx/');
    browser.show()
  }

}
