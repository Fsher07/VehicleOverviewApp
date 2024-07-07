import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { SignInComponent } from './sign-in.component';
import { InputTextModule } from 'primeng/inputtext'; // Import PrimeNG InputTextModule
import { ButtonModule } from 'primeng/button';

describe('SignInComponent', () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule, // Ensure this is imported
        RouterTestingModule,
        InputTextModule, // Add PrimeNG InputTextModule
        ButtonModule, // Add PrimeNG ButtonModule
      ],
      declarations: [SignInComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display custom password validation error message', () => {
    const passwordInput = component.signInForm.controls['password'];
    passwordInput.setValue('weakpass');
    passwordInput.markAsTouched();
    fixture.detectChanges();

    const passwordError = fixture.debugElement.query(
      By.css('.p-error')
    ).nativeElement;
    expect(passwordError.textContent).toContain(
      'Password must be at least 8 characters long, contain at least one uppercase letter, one number, and one special character'
    );
  });
});
