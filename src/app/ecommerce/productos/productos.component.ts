import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos=[
    {id:1,codigo:101,descripcion:'Fresas',precioCompra:5,precioVenta:10,ganancia:5,existencia:100},
    {id:2,codigo:102,descripcion:'Uvas',precioCompra:10,precioVenta:13,ganancia:3,existencia:100},
    {id:3,codigo:103,descripcion:'Limones',precioCompra:8,precioVenta:10,ganancia:2,existencia:100},
    {id:4,codigo:104,descripcion:'Papaya',precioCompra:9,precioVenta:12,ganancia:3,existencia:100},
    {id:5,codigo:105,descripcion:'Manzanas',precioCompra:3,precioVenta:6,ganancia:3,existencia:100}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
