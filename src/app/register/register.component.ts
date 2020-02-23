import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  isSubmitted = false;
  isSuccessRegistration  = false;

  registrationForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(6)]],
    lastName: ['', [Validators.required, Validators.minLength(6)]],
    phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9_-]{10,10}')]],
    countryName: ['', [Validators.required]],
  });

  // Country Names
  Country: any = ['USA', 'India', 'Canada', 'Nepal'];
  constructor(private fb: FormBuilder ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.isSubmitted = true;
    if (!this.registrationForm.valid) {
      return false;
    } else {
      this.isSuccessRegistration = true;
      // alert(JSON.stringify(this.registrationForm.value))
    }

  }

  changeCountry(e) {
    this.Country.setValue(e.target.value, {
      onlySelf: true
    });
  }

  // Getter method to access formcontrols

  get firstName() {
    return this.registrationForm.get('firstName');
  }

  get lastName() {
    return this.registrationForm.get('lastName');
  }

  get phoneNumber() {
    return this.registrationForm.get('phoneNumber');
  }

  get countryName() {
    return this.registrationForm.get('countryName');
  }



}
