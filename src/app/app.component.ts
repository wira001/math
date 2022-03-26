import { Component, OnInit } from '@angular/core';
import { KatexOptions } from 'ng-katex';
import pdfMake from 'pdfmake/build/pdfMake'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  equation: string = 'x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}';
  options: KatexOptions = {
    displayMode: true,
  };

  ngOnInit(): void {
      
  }
  title = 'math-project';

  generatePDF(){
    var dd = {
      content: [
        'fomrula is here'
      ]
    }

    const pdfObj = pdfMake.createPdf(dd).open();
  }

  onChangeFormula(text: string){
    this.equation = text;
  }
}
