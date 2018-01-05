import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import * as jsPDF from 'jspdf'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pdfSrc: string = 'assets/pdf1.pdf';
  
  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    var doc = new jsPDF('assets/pdf1.pdf');

    var blob = doc.output('blob', {type: 'application/pdf'});
    this.pdfSrc = URL.createObjectURL(blob)
  }

}