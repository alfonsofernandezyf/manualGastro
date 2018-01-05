import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';


import { PrologoPage } from '../prologo/prologo';
import { AgradecimientosPage } from '../agradecimientos/agradecimientos';
import { AutoresPage } from '../autores/autores';
import { Cap1Page } from '../cap1/cap1';
import { Cap2Page } from '../cap2/cap2';
import { Cap3Page } from '../cap3/cap3';
import { Cap4Page } from '../cap4/cap4';
import { Cap5Page } from '../cap5/cap5';
import { Cap6Page } from '../cap6/cap6';
import { Cap7Page } from '../cap7/cap7';
import { Cap8Page } from '../cap8/cap8';
import { Cap9Page } from '../cap9/cap9';
import { Cap10Page } from '../cap10/cap10';
import { Cap11Page } from '../cap11/cap11';
import { Cap12Page } from '../cap12/cap12';
import { Cap13Page } from '../cap13/cap13';
import { Cap14Page } from '../cap14/cap14';
import { Cap15Page } from '../cap15/cap15';
import { Cap16Page } from '../cap16/cap16';
import { Cap17Page } from '../cap17/cap17';
import { Cap18Page } from '../cap18/cap18';
import { Cap19Page } from '../cap19/cap19';
import { Cap20Page } from '../cap20/cap20';
import { Cap21Page } from '../cap21/cap21';
import { Cap22Page } from '../cap22/cap22';
import { Cap23Page } from '../cap23/cap23';
import { Cap24Page } from '../cap24/cap24';
import { Cap25Page } from '../cap25/cap25';

/**
 * Generated class for the IndicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-indice',
  templateUrl: 'indice.html',
})

export class IndicePage {

  OtherPage: any = '';    

  constructor(private iab: InAppBrowser, public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {}
  
  goToPrologoPage(){
  this.navCtrl.push(PrologoPage);
  }
  
   
   goToAgradecimientosPage(){
    this.navCtrl.push(AgradecimientosPage);
   }

   goToAutoresPage(){
    this.navCtrl.push(AutoresPage);
   }
   goToCap1Page(){
    this.navCtrl.push(Cap1Page);
   }
   goToCap2Page(){
    this.navCtrl.push(Cap2Page);
   }
   goToCap3Page(){
    this.navCtrl.push(Cap3Page);
   }
   goToCap4Page(){
    this.navCtrl.push(Cap4Page);
   }
   goToCap5Page(){
    this.navCtrl.push(Cap5Page);
   }
   goToCap6Page(){
    this.navCtrl.push(Cap6Page);
   }
   goToCap7Page(){
    this.navCtrl.push(Cap7Page);
   }
   goToCap8Page(){
    this.navCtrl.push(Cap8Page);
   }
   goToCap9Page(){
    this.navCtrl.push(Cap9Page);
   }
   goToCap10Page(){
    this.navCtrl.push(Cap10Page);
   }
   goToCap11Page(){
    this.navCtrl.push(Cap11Page);
   }

   goToCap12Page(){
    this.navCtrl.push(Cap12Page);
   }

   goToCap13Page(){
    this.navCtrl.push(Cap13Page);
   }
   goToCap14Page(){
    this.navCtrl.push(Cap14Page);
   }
   goToCap15Page(){
    this.navCtrl.push(Cap15Page);
   }
   goToCap16Page(){
    this.navCtrl.push(Cap16Page);
   }
   goToCap17Page(){
    this.navCtrl.push(Cap17Page);
   }
   goToCap18Page(){
    this.navCtrl.push(Cap18Page);
   }
   goToCap19Page(){
    this.navCtrl.push(Cap19Page);
   }
   goToCap20Page(){
    this.navCtrl.push(Cap20Page);
   }
   goToCap21Page(){
    this.navCtrl.push(Cap21Page);
   }
   goToCap22Page(){
    this.navCtrl.push(Cap22Page);
   }
   goToCap23Page(){
    this.navCtrl.push(Cap23Page);
   }
   goToCap24Page(){
    this.navCtrl.push(Cap24Page);
   }
   goToCap25Page(){
    this.navCtrl.push(Cap25Page);
   }

   OpenUrl(){
    const browser = this.iab.create('http://www.senosiain.com.mx/');
    browser.show()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IndicePage');
  }

}
