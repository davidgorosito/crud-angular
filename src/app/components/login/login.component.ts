import { validateVerticalPosition } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 // creo el formulario 
 
  form : FormGroup

  constructor( private fb :FormBuilder,private _snackBar: MatSnackBar, private router:Router) {
  this.form =this.fb.group({ 
  usuario: ['', Validators.required],
  password: ['', Validators.required]

})

   }

  ngOnInit(): void {
  }
  ingresar(){

    //almaceno los datos que viajan del form en dos variables 

    const usuario=this.form.value.usuario;
    const password=this.form.value.password;
    console.log(usuario);
    console.log(password);

    //simulacion de backend 
    
    if (usuario == 'admin' && password=='admin123') {
      // renderizar dashboard
      this.router.navigate(['dashboard']);
    } else{ 
      // mensaje de error 
      this.error();
      this.form.reset();
    }
    
  } 
  //muestro cartelito de error

  error(){

    this._snackBar.open('usuario o contraseña son invalidos','',{
      duration:3000,
      horizontalPosition:'center',
      verticalPosition:'bottom'
    })
  }
  

}
