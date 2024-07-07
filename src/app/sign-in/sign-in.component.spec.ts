import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { SignInComponent } from './sign-in.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';

describe('SignInComponent', () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        RouterTestingModule,
        InputTextModule,
        ButtonModule,
      ],
      declarations: [SignInComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router);
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

  it('should navigate to /vehicle-overview on successful sign in', () => {
    spyOn(router, 'navigate');
    const usernameInput = component.signInForm.controls['username'];
    const passwordInput = component.signInForm.controls['password'];

    usernameInput.setValue('avltest');
    passwordInput.setValue('Test*123');
    fixture.detectChanges();

    const signInButton = fixture.debugElement.query(
      By.css('button[type="submit"]')
    ).nativeElement;
    signInButton.click();

    expect(router.navigate).toHaveBeenCalledWith(['/vehicle-overview']);
  });
});
