import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//angular material
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatSliderModule } from '@angular/material/slider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
//modulos
import { ReactiveFormsModule } from '@angular/forms';





@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatToolbarModule

  ],// exporto para poder usarlos en los demas module
  exports:[
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatToolbarModule
  ]
})
export class SharedModule { }
