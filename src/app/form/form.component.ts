import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  formGroup: FormGroup;
  constructor(
    private formBulid: FormBuilder,

  ) { 

  }

  ngOnInit() {
      this.formGroup = this.formBulid.group({
      firsName: this.formBulid.control(''),
      lastName: ['']
  })
}

}
