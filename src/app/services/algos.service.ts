import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AlgosService {
  code: string = '';
  codePrenoms = '';
  dayLetter = "";


  months = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];

  constructor() {}

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

  ConstituateSurnameCode(inputString) {
    let _inputString = inputString.replace(' ', '');

    let consonna = this.getConsonneOnString(_inputString);

    if (consonna.length === 3) {
      this.code = consonna;
    } else if (consonna.length > 3) {
      //console.log("nombre sup à 3");
      this.code = consonna.slice(0, 3);
    } else {
      let voyelles = this.getVoyelOnString(_inputString);

      if (consonna.length === 1) {
        this.code = consonna.concat(voyelles.substr(0, 2));
      }
      if (consonna.length === 2) {
        this.code = consonna.concat(voyelles.substr(0, 1));
      }
    }
  }

  getFirstNameCode(inputText: string): string {
    let stringLenght = inputText.length;
    console.log(stringLenght);

    if (stringLenght === 1) {
      this.ConstituateSurnameCode(inputText);
      this.code = inputText.concat('XX');
    }

    if (stringLenght === 2) {
      this.ConstituateSurnameCode(inputText);
      this.code = inputText.concat('X');
    }

    if (stringLenght >= 3) {
      this.ConstituateSurnameCode(inputText);
    }

    return this.code;
  }

  // code pour la gestion des prenoms

  constituateLastNameCode(prenoms: string) {
    let _prenom = prenoms.replace('', '');

    let consonna = this.getConsonneOnString(prenoms);

    if (consonna.length === 3) {
      this.codePrenoms = consonna;
    }

    if (consonna.length > 3) {
      let removeChar = consonna.charAt(1);
      let newConsonnas = consonna.replace(removeChar, '');
      this.codePrenoms = newConsonnas.slice(0, 3);
    }

    if (consonna.length < 3) {
      let voyelle = this.getVoyelOnString(_prenom);
      console.log(voyelle);

      if (consonna.length === 1) {
        this.codePrenoms = consonna.concat(voyelle.substr(0, 2));
      }
      if (consonna.length === 2) {
        this.codePrenoms = consonna.concat(voyelle.substr(0, 1));
      }
    }
  }

  getLastNameCode(inputText: string): string {
    let stringLenght = inputText.length;
    console.log(stringLenght);

    if (stringLenght === 1) {
      this.constituateLastNameCode(inputText);
      this.codePrenoms = this.codePrenoms.concat('XX');
    }

    if (stringLenght === 2) {
      this.constituateLastNameCode(inputText);
      this.codePrenoms = this.codePrenoms.concat('X');
    }

    if (stringLenght >= 3) {
      this.constituateLastNameCode(inputText);
    }

    return this.codePrenoms;
  }

  // Gestion du code lier à la date

  getMonthLetter(pos: number) {
    return this.months[pos];
  }

  convert(n:string) {
    if (n.length === 1){
      n = '0' + n;
    }
    return n;
  }

  constituatedateCode(birthday: string, genre: string) {


    let naissance = new Date(birthday);
    let year = naissance.getFullYear().toString();
    let yearDigit = year.substr(2, year.length - 1);

    let monthLetter = this.getMonthLetter(naissance.getMonth());
    console.log(monthLetter);

    if (genre === 'f' && naissance.getDay() < 10) {
      let day = naissance.getDay() + 40;
      this.dayLetter = day.toString();
    } else {
      let day = naissance.getDay().toString();
      this.dayLetter = this.convert(day);
    }

    return yearDigit +""+monthLetter+""+this.dayLetter;
  }
}
