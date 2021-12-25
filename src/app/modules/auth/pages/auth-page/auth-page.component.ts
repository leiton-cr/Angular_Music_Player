import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@modules/auth/auth.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss'],
})
export class AuthPageComponent implements OnInit {

  public sessionError:boolean;
  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,  
    private service:AuthService,
    private router: Router
    ) {

    this.sessionError = false;

    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', 
      [Validators.required, Validators.minLength(6),Validators.maxLength(16)]],
    });
  }

  ngOnInit(): void {}

  async login(){
    const {email, password} = this.form.value;
    const { data, tokenSession } = await lastValueFrom(this.service.sendCredentials(email, password));
  
    if(!data){
      this.sessionError = true;
    }else{
      this.sessionError = false;
      this.router.navigate(['/', 'tracks'])
    }
   
  }

}
