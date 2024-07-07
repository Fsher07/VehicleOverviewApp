import { Component } from '@angular/core';
import { passwordValidator } from './password-validator';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  signInForm: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, passwordValidator]],
    });
  }

  onSubmit(): void {
    if (this.signInForm.valid) {
      console.log('Form Submitted', this.signInForm.value);
      this.router.navigate(['/vehicle-overview']);
    }
  }

  get password() {
    return this.signInForm.get('password');
  }
}
