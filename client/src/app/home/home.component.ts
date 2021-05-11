import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Districts } from '../data/districts'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public chart: any;
  userForm: FormGroup;
  districts: any = [];

  constructor(formBuilder: FormBuilder) {
    this.userForm = new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'district': new FormControl(null, [Validators.required]),
      'email': new FormControl(null, [Validators.required, Validators.email])
    });
  }

  ngOnInit(): void {
    this.districts = Districts;
  }

  onSubmit(data: any) {
    if (this.userForm.status === 'VALID') {
      console.log('Form valid', data);
    } else {
      console.log('Form not valid', this.userForm);
    }
  }

  getErrorEmail() {
    return this.userForm.get('email')?.hasError('required') ? 'Field is required' :
      this.userForm.get('email')?.hasError('email') ? 'Not a valid email address' : '';
  }
  getErrorName() {
    return this.userForm.get('name')?.hasError('required') ? 'Field is required' : '';
  }
  getErrorDistricts() {
    return this.userForm.get('district')?.hasError('required') ? 'Field is required' : '';
  }
}
