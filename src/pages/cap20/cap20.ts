import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as jsPDF from 'jspdf'


/**
 * Generated class for the Cap20Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cap20',
  templateUrl: 'cap20.html',
})
export class Cap20Page {

  
  pdfSrc: string = 'assets/pdf1.pdf';
  
  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    var doc = new jsPDF('assets/pdf1.pdf');

    var blob = doc.output('blob', {type: 'application/pdf'});
    this.pdfSrc = URL.createObjectURL(blob)
  }

}
