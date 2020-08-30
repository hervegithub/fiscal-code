import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlgosService {

  constructor() { }

  getVoyelOnString(inputString: string): string {
    const voyellePattern = /['aeiou']/gi;
    const voyelles = inputString.match(voyellePattern).join('').toUpperCase();
    return voyelles;
  }

  getConsonneOnString(inputString: string): string {
    const consonnePattern = /(?![aeiou])[a-z]/gi;
    const consonne = inputString.match(consonnePattern).join('').toUpperCase();
    return consonne;
  }

  getSurnameCode(inputString): string {
    let consonna = this.getConsonneOnString(inputString);
    let code = "";

    if (consonna.length >= 3) {
      code = consonna.substring(0, 3);
      console.log('code : '+ code);
    }else{
      if (inputString === 2) {
        console.log("ok code !!");
        code = consonna + "X";
        console.log('code : '+ code);

      }
      if (inputString === 1) {
        code = consonna + "XX";
        console.log('code : '+ code);

      }
    }
    return code;
  }

}
