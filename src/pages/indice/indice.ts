import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';


@IonicPage({ name: 'IndicePage'})

@Component({
  selector: 'page-indice',
  templateUrl: 'indice.html',
})

export class IndicePage {

  OtherPage: any = '';    

  constructor(private iab: InAppBrowser, public navCtrl: NavController, public navParams: NavParams) {}
  
  goToPrologoPage(){
  this.navCtrl.push('PrologoPage');
  }
  
  
   
   goToAgradecimientosPage(){
    this.navCtrl.push('AgradecimientosPage');
   }

   goToAutoresPage(){
    this.navCtrl.push('AutoresPage');
   }
   goToCap1Page(){
    this.navCtrl.push('Cap1Page');
   }
   goToCap2Page(){
    this.navCtrl.push('Cap2Page');
   }
   goToCap3Page(){
    this.navCtrl.push('Cap3Page');
   }
   goToCap4Page(){
    this.navCtrl.push('Cap4Page');
   }
   goToCap5Page(){
    this.navCtrl.push('Cap5Page');
   }
   goToCap6Page(){
    this.navCtrl.push('Cap6Page');
   }
   goToCap7Page(){
    this.navCtrl.push('Cap7Page');
   }
   goToCap8Page(){
    this.navCtrl.push('Cap8Page');
   }
   goToCap9Page(){
    this.navCtrl.push('Cap9Page');
   }
   goToCap10Page(){
    this.navCtrl.push('Cap10Page');
   }
   goToCap11Page(){
    this.navCtrl.push('Cap11Page');
   }

   goToCap12Page(){
    this.navCtrl.push('Cap12Page');
   }

   goToCap13Page(){
    this.navCtrl.push('Cap13Page');
   }
   goToCap14Page(){
    this.navCtrl.push('Cap14Page');
   }
   goToCap15Page(){
    this.navCtrl.push('Cap15Page');
   }
   goToCap16Page(){
    this.navCtrl.push('Cap16Page');
   }
   goToCap17Page(){
    this.navCtrl.push('Cap17Page');
   }
   goToCap18Page(){
    this.navCtrl.push('Cap18Page');
   }
   goToCap19Page(){
    this.navCtrl.push('Cap19Page');
   }
   goToCap20Page(){
    this.navCtrl.push('Cap20Page');
   }
   goToCap21Page(){
    this.navCtrl.push('Cap21Page');
   }
   goToCap22Page(){
    this.navCtrl.push('Cap22Page');
   }
   goToCap23Page(){
    this.navCtrl.push('Cap23Page');
   }
   goToCap24Page(){
    this.navCtrl.push('Cap24Page');
   }
   goToCap25Page(){
    this.navCtrl.push('Cap25Page');
   }
   

   OpenUrl(){
    const browser = this.iab.create('http://www.senosiain.com.mx/');
    browser.show()
  }

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad IndicePage');
  }

}
