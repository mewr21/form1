import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import {  User } from '../user';
import { EventEmitter } from 'events';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  formGroup: FormGroup;
  @Output() change = new EventEmitter();
  constructor(
    private formBulid: FormBuilder,

  ) { 

  }

  ngOnInit() {
      this.formGroup = this.formBulid.group({
      firstName: ['',[Validators.required, Validators.minLength(2)]],
      lastName: ['',[Validators.required, Validators.minLength(2)]],
      email:['',[Validators.email]],
      age:[' ' [Validators.age]]
      
  })
}
EmailValidator(control: AbstractControl){
  const value = control.value;
  if (value && value.includes('@')){
    return null;

  }
  return{
    email :true
  }
}


onSubmit(form: FormGroup){
  console.log(form.valid, form.invalid)
  console.log((<FormControl>form.get('firstName')).errors);

  if(form.valid){
  const {firstName, lastName,email,age} = form.value;
  const user = new User(firstName, lastName,email,age);
  //this.change.emit()
  console.log(user);
  }else {
    ['firstName','lastName','age','email'].forEach((key : string) => {
      console.log(form.get(key).touched);
      form.get(key).markAsTouched()
      
    })

  }

}
}
