import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
   

/**
 * Generated class for the Cap11Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({ name: 'Cap11Page'})
@Component({
  selector: 'page-cap11',
  templateUrl: 'cap11.html',
})
export class Cap11Page {

  
   
  constructor(public navCtrl: NavController) {

  }
  
   private content: string;
    public query: string;


    public highlight() {
        if(!this.query) {
            return this.content;
        }
        return this.content.replace(new RegExp(this.query, "gi"), match => {
            return '<span class="highlightText">' + match + '</span>';
        });
    }


  ionViewDidLoad() {
  

  
   
  }

}
