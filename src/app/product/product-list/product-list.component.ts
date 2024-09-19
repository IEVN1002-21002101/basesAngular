import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  productos:any[]=[
    {
      "productoID":1,
      "Modelo":"Sentra",
      "Descripcion":"4 personas",
      "precio":200000,
      "Year":2023,
      "Marca":"Nissan",
      "Color":"Azul",
      "ImagenUrl":""
    },
    {
      "productoID":1,
      "Modelo":"A4",
      "Descripcion":"4 personas",
      "precio":300000,
      "Year":2022,
      "Marca":"AUDI",
      "Color":"Blanco",
      "ImagenUrl":""
    },
    {
      "productoID":1,
      "Modelo":"Rio",
      "Descripcion":"4 personas",
      "precio":150000,
      "Year":2020,
      "Marca":"KIA",
      "Color":"Rojo",
      "ImagenUrl":""
    },
  ]
}
