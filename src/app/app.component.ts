import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  exampleForm: FormGroup;
  
  constructor( private fb: FormBuilder) {
    this.exampleForm = this.fb.nonNullable.group({
      email: ['',[Validators.required, Validators.email, Validators.minLength(6)]],
      password: ['',[Validators.required, Validators.minLength(8)]]
    });
  }
  get emailControl() {
    return this.exampleForm.get('email') as FormControl;
  }
  get passwordControl() {
    return this.exampleForm.get('password') as FormControl;
  }
  onSubmit() {
    if (this.exampleForm.invalid) {
      return;
    }
    console.log('form works');
  }
  onValueChange(controlName: string, value: string) {
    this.exampleForm.get(controlName)?.setValue(value);
  }
  
}
