import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Swal  from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  constructor(private fb:FormBuilder,private router:Router){}
  ngOnInit(){
    this.loginForm=this.fb.group({
      username:[],
      password:[]
    })
  }
  onLoginSubmit(){
   console.log(this.loginForm.value);
   Swal.fire({
    position: 'top',
    icon: 'success',
    title: 'Login Successfully!',
    showConfirmButton: false,
    timer: 2500
  })
   if(this.loginForm.controls['username'].value==='se123' &&  this.loginForm.controls['password'].value==='se123'){
   localStorage.setItem('role','salesexe');
   this.router.navigateByUrl('/dashboard/salesexe');
  }
  else if(this.loginForm.controls['username'].value==='oe123' &&  this.loginForm.controls['password'].value==='oe123'){
    localStorage.setItem('role','operationexe');
    this.router.navigateByUrl('/dashboard/operationexe');
  }
  else if(this.loginForm.controls['username'].value==='ah123' &&  this.loginForm.controls['password'].value==='ah123'){
    localStorage.setItem('role','accounthead');
    this.router.navigateByUrl('/dashboard/accounthead');
  }
  else if(this.loginForm.controls['username'].value==='re123' &&  this.loginForm.controls['password'].value==='re123'){
    localStorage.setItem('role','relationalexe');
    this.router.navigateByUrl('/dashboard/relationalexe');
  }
  else{
    
  Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'Something went wrong!',
  footer: 'Please Check UserName and Password ?'
})
  }
}
}
