import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  //configuracion de  las rutas
  
  // cuando la rutra sea vacia redireccionar a login
  {path:'', redirectTo:'login', pathMatch:'full'},
 // ruta login renderiza componente login 
  {path:'login',component:LoginComponent},
  // cuando pasa la url de dashboard cargo el componente  hijo
  {path:'dashboard',loadChildren:() =>import('./components/dashboard/dashboard.module').then(x =>x.DashboardModule)} ,
  // si viajan url que no machea con nada se redicciona al login 
  {path:'**', redirectTo:'login', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
