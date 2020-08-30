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
    console.log(this.algoService.getSurnameCode("FO"));
  }
}
