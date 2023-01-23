import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { ProductosComponent } from './productos/productos.component';
import { CambiosComponent } from './cambios/cambios.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';




@NgModule({
  declarations: [
    MenuComponent,
    ProductosComponent,
    CambiosComponent
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  exports: [
    MenuComponent,
    ProductosComponent,
    CambiosComponent
  ]
})
export class EcommerceModule { }
