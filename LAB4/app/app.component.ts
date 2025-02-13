import { Component } from '@angular/core';
import { ProductsComponent } from './products/products.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductsComponent], // 👈 Добавляем компонент
  template: `<app-products></app-products>`, // 👈 Используем компонент
})
export class AppComponent { }
