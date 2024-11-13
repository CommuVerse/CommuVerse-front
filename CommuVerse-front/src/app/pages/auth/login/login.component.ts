import { Component, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatInputModule, MatCardModule,
    MatSnackBarModule, RouterLink, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private snackBar = inject(MatSnackBar);

  constructor() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required, Validators.email],
      password: ['', [Validators.required]]
    });
  }
  controlHasError(control: string, error: string) {
    return this.loginForm.controls[control].hasError(error);
  }

  onSummit(){
    if (this.loginForm.invalid){
      return;
    };
    this.showSnackBar("inicio de sesion exitoso")
    }
    private showSnackBar(message:String):void{
      this.snackBar.open('Login Sucessful','Close',{
        duration:2000,
        verticalPosition:'top'
      });
    }
  }

