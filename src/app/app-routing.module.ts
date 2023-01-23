import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CambiosComponent } from './ecommerce/cambios/cambios.component';

import { ProductosComponent } from './ecommerce/productos/productos.component';
const routes: Routes = [
 
 
  {path:'productos',component:ProductosComponent},
  {path:'cambios',component:CambiosComponent},
  {path:'productos/:objeto/:id',component:CambiosComponent},
  {path:'cambios/:datos/:idp',component:ProductosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
