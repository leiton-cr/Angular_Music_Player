import { FormBuilder } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthPageComponent } from './auth-page.component';
import { query } from '@angular/animations';
import { By } from '@angular/platform-browser';

describe('AuthPageComponent', () => {
  let component: AuthPageComponent;
  let fixture: ComponentFixture<AuthPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [AuthPageComponent],
      providers: [FormBuilder],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /**
   * Debe asegurar que el formulario sea invalido
   * cuando los datos son erroneos.
   */

  //NOTE: Patron de testing AAA - Arrange, Act, Assert

  it('⭕ should return invalid form', () => {
    // NOTE: ARRANGE - Iniciacion de elementos
    const mockCredentials = {
      email: '0x0x0x0',
      password: '-----------------',
    };

    const emailForm = component.form.get('email');
    const passwordForm = component.form.get('password');

    // NOTE: ACT - Asignacion de elementos

    emailForm?.setValue(mockCredentials.email);
    passwordForm?.setValue(mockCredentials.password);

    // NOTE: ASSERT - Ejecucion de prueba

    expect(component.form.invalid).toBeTruthy();
  });

  it('⭕ should return valid form', () => {
   
    const mockCredentials = {
      email: 'test@test.com',
      password: '12345678',
    };

    const emailForm = component.form.get('email');
    const passwordForm = component.form.get('password');

    emailForm?.setValue(mockCredentials.email);
    passwordForm?.setValue(mockCredentials.password);

    expect(component.form.invalid).toBeFalsy();
  });


  it('⭕ should login button word be "Iniciar sesión"', () => {
    const elementRef = fixture.debugElement.query(By.css('.main-auth__form-submit'));
    const text = elementRef.nativeElement.value;

    expect(text).toEqual('Iniciar sesión')
  })




});
