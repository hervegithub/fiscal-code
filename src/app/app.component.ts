import { Component } from '@angular/core';
import { AlgosService } from './services/algos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fiscal-code';

  constructor(private algoService: AlgosService){
    let firstNameCode = this.algoService.getFirstNameCode('FO')
    console.log('firstName: '+firstNameCode);
    let lastNameCode = this.algoService.getLastNameCode('NA');
    console.log('LastName: '+lastNameCode);
    console.log(this.algoService.constituatedateCode("2020-05-10", "f"));
  }
}
