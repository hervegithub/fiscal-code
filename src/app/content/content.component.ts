import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Users } from '../modal/user.modal';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  rForm:FormGroup;
  user= new Users();

  constructor(private fb: FormBuilder) {
    this.user.initUserInfos();

    this.rForm = fb.group({
      'firstName' : [null, Validators.required],
      'lastName' : [null, Validators.required],
      'birthday' : [null, Validators.required],
      'genre' : [null, Validators.required],
      'place' : [null, Validators.required],
    })
  }

  onSoumission(value){

  }

  ngOnInit(): void {
  }

}
