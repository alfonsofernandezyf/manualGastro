import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { LoadingController } from 'ionic-angular';



@IonicPage({ name: 'IndicePage'})

@Component({
  selector: 'page-indice',
  templateUrl: 'indice.html',
})

export class IndicePage {

  OtherPage: any = '';    

  constructor(private iab: InAppBrowser, public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {}
  
  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      content: 'Cargando, espere...'
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    }, 2000);
  }  
  
  
  goToPrologoPage(){
  this.presentLoadingDefault();
  setTimeout(() => {
    this.navCtrl.push('PrologoPage');
  }, 1000);     
  }
  
  
   
   goToAgradecimientosPage(){
    this.presentLoadingDefault();
    setTimeout(() => {
      this.navCtrl.push('AgradecimientosPage');}, 100);   
   }

   goToAutoresPage(){
    this.presentLoadingDefault();
    this.navCtrl.push('AutoresPage');
   }
   goToCap1Page(){
    this.presentLoadingDefault();
    setTimeout(() => { this.navCtrl.push('Cap1Page'); }, 100);    
   }

   goToCap2Page(){
    this.presentLoadingDefault();
    setTimeout(() => { this.navCtrl.push('Cap2Page'); }, 100);    
    
   }
   goToCap3Page(){
    this.presentLoadingDefault();
    setTimeout(() => { this.navCtrl.push('Cap3Page'); }, 100);    
   }
   goToCap4Page(){
    this.presentLoadingDefault();
    setTimeout(() => { this.navCtrl.push('Cap4Page'); }, 100);    
   }
   goToCap5Page(){
    this.presentLoadingDefault();
    setTimeout(() => { this.navCtrl.push('Cap5Page'); }, 100);    
   }
   goToCap6Page(){
    this.presentLoadingDefault();
    setTimeout(() => { this.navCtrl.push('Cap6Page'); }, 100);    
   }
   goToCap7Page(){
    this.presentLoadingDefault();
    setTimeout(() => { this.navCtrl.push('Cap7Page'); }, 100);    
   }

   goToCap8Page(){
    this.presentLoadingDefault();
    setTimeout(() => { this.navCtrl.push('Cap8Page'); }, 100);    
   }
   goToCap9Page(){
    this.presentLoadingDefault();
    setTimeout(() => { this.navCtrl.push('Cap9Page'); }, 100);    
   }
   goToCap10Page(){
    this.presentLoadingDefault();
    setTimeout(() => { this.navCtrl.push('Cap10Page'); }, 100);    
   }
   goToCap11Page(){
    this.presentLoadingDefault();
    setTimeout(() => { this.navCtrl.push('Cap11Page'); }, 100);    
   }

   goToCap12Page(){
    this.presentLoadingDefault();
    setTimeout(() => { this.navCtrl.push('Cap12Page'); }, 100);    
   }

   goToCap13Page(){
    this.presentLoadingDefault();
    setTimeout(() => { this.navCtrl.push('Cap13Page'); }, 100);    
   }
   goToCap14Page(){
    this.presentLoadingDefault();
    setTimeout(() => { this.navCtrl.push('Cap14Page'); }, 100);    
   }
   goToCap15Page(){
    this.presentLoadingDefault();
    setTimeout(() => { this.navCtrl.push('Cap15Page'); }, 100);    
   }
   goToCap16Page(){
    this.presentLoadingDefault();
    setTimeout(() => { this.navCtrl.push('Cap16Page'); }, 100);    
   }
   goToCap17Page(){
    this.presentLoadingDefault();
    setTimeout(() => { this.navCtrl.push('Cap17Page'); }, 100);    
   }
   goToCap18Page(){
    this.presentLoadingDefault();
    setTimeout(() => { this.navCtrl.push('Cap18Page'); }, 100);    
   }
   goToCap19Page(){
    this.presentLoadingDefault();
    setTimeout(() => { this.navCtrl.push('Cap19Page'); }, 100);    
   }
   goToCap20Page(){
    this.presentLoadingDefault();
    setTimeout(() => { this.navCtrl.push('Cap20Page'); }, 100);    
   }
   goToCap21Page(){
    this.presentLoadingDefault();
    setTimeout(() => { this.navCtrl.push('Cap21Page'); }, 100);    
   }
   goToCap22Page(){
    this.presentLoadingDefault();
    setTimeout(() => { this.navCtrl.push('Cap22Page'); }, 100);    
   }
   goToCap23Page(){
    this.presentLoadingDefault();
    setTimeout(() => { this.navCtrl.push('Cap23Page'); }, 100);    
   }
   goToCap24Page(){
    this.presentLoadingDefault();
    setTimeout(() => { this.navCtrl.push('Cap24Page'); }, 100);    
   }
   goToCap25Page(){
    this.presentLoadingDefault();
    setTimeout(() => { this.navCtrl.push('Cap25Page'); }, 100);    
   }
   

   OpenUrl(){
    this.presentLoadingDefault();
    const browser = this.iab.create('http://www.senosiain.com.mx/');
    browser.show()
  }

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad IndicePage');
  }

}
