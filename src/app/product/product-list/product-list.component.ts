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
      "ImagenUrl":"https://acroadtrip.blob.core.windows.net/catalogo-imagenes/m/RT_V_0c7166c16ff74073b65851f7f0b360ed.jpg"
    },
    {
      "productoID":1,
      "Modelo":"A4",
      "Descripcion":"4 personas",
      "precio":300000,
      "Year":2022,
      "Marca":"AUDI",
      "Color":"Blanco",
      "ImagenUrl":"https://acroadtrip.blob.core.windows.net/publicaciones-imagenes/Large/audi/a4/mx/RT_PU_4f813f5a5f4142d89f2244758c587ca0.webp"
    },
    {
      "productoID":1,
      "Modelo":"Rio",
      "Descripcion":"4 personas",
      "precio":150000,
      "Year":2020,
      "Marca":"KIA",
      "Color":"Rojo",
      "ImagenUrl":"https://cdn.milenio.com/uploads/media/2020/03/14/exito-kia-motors-mexico-calidad_0_1_958_596.jpg"
    },
  ]
}
