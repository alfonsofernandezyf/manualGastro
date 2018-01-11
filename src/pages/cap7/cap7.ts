import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import * as jsPDF from 'jspdf'


/**
 * Generated class for the Cap7Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cap7',
  templateUrl: 'cap7.html',
})
export class Cap7Page {
  
  pdfSrc: string = 'assets/pdf1.pdf';
  
  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    var doc = new jsPDF('assets/pdf1.pdf');

    var blob = doc.output('blob', {type: 'application/pdf'});
    this.pdfSrc = URL.createObjectURL(blob)
  }

}
