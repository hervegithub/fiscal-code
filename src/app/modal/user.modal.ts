export class Users {
  private firstName: string;
  private lastName: string;
  private birthday: string;
  private genre: string;
  private place: string;

  constructor() {}

  initUserInfos() {
    this.firstName = '';
    this.lastName = '';
    this.birthday = '';
    this.genre = '';
    this.place = '';
  }

  getFirstName() : string{
    return this.firstName
  }

  setFirstName(firstname : string){
    this.firstName = firstname;
  }

  getLastName() : string{
    return this.lastName
  }

  setLastName(lastname : string){
    this.lastName = lastname;
  }

  getBirthday() : string{
    return this.birthday
  }

  setBirthday(birthday : string){
    this.birthday = birthday;
  }

  getGesnre() : string{
    return this.genre
  }

  setGenre(genre : string){
    this.genre = genre;
  }

  getPlace() : string{
    return this.place
  }

  setPlace(place : string){
    this.place = place;
  }
}
