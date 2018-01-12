import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { LoadingController } from 'ionic-angular';






@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:string = 'IndicePage';

  pages: Array<{title: string, component: string}>;

  constructor(private iab: InAppBrowser, public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public loadingCtrl: LoadingController) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Prologo', component: 'PrologoPage' },
      { title: 'Capítulo 1', component: 'Cap1Page' },
      { title: 'Capítulo 2', component: 'Cap2Page' },
      { title: 'Capítulo 3', component: 'Cap3Page' },
      { title: 'Capítulo 4', component: 'Cap4Page' },
      { title: 'Capítulo 5', component: 'Cap5Page' },
      { title: 'Capítulo 6', component: 'Cap6Page' },
      { title: 'Capítulo 7', component: 'Cap7Page' },
      { title: 'Capítulo 8', component: 'Cap8Page' },
      { title: 'Capítulo 9', component: 'Cap9Page' },    
      { title: 'Capítulo 10', component: 'Cap10Page' },
      { title: 'Capítulo 11', component: 'Cap11Page' },
      { title: 'Capítulo 12', component: 'Cap12Page' },
      { title: 'Capítulo 13', component: 'Cap13Page' },
      { title: 'Capítulo 14', component: 'Cap14Page' },
      { title: 'Capítulo 15', component: 'Cap15Page' },
      { title: 'Capítulo 16', component: 'Cap16Page' },
      { title: 'Capítulo 17', component: 'Cap17Page' },
      { title: 'Capítulo 18', component: 'Cap18Page' },
      { title: 'Capítulo 19', component: 'Cap19Page' },
      { title: 'Capítulo 20', component: 'Cap20Page' },
      { title: 'Capítulo 21', component: 'Cap21Page' },
      { title: 'Capítulo 22', component: 'Cap22Page' },
      { title: 'Capítulo 23', component: 'Cap23Page' },
      { title: 'Capítulo 24', component: 'Cap24Page' },
      { title: 'Agradecimientos', component: 'AgradecimientosPage' },
      { title: 'Autores y coautores', component: 'AutoresPage' },
      { title: 'Créditos', component: 'Cap25Page' },    

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

  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      content: 'Cargando, espere...'
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    }, 2000);
  }  

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.presentLoadingDefault();
    setTimeout(() => {
      this.nav.push(page.component);
    }, 1000);
    
    
  }

 

  OpenUrl(){
    this.presentLoadingDefault();
    const browser = this.iab.create('http://www.senosiain.com.mx/');
    browser.show()
  }

}
