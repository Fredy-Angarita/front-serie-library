import { Component, OnInit } from '@angular/core';
import { BUTTON_COLORS, TITLES, TYPE_BUTTONS } from './data/constants/constants';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public form: FormGroup = new FormGroup({});
  public maxLengthName: number = 50;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
    });
  }

  onValueChange(controlName: string, value: string) {
    this.form.get(controlName)?.setValue(value);
  }
  onSubmit() {
    if (!this.form.valid) {
      console.log('Formulario inválido');
      return;
    }
    console.log(this.form.value);
  }
}
