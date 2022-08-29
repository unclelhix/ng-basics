import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { products } from '../products-mock';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product [] = products;
  header: string = "Products";

  constructor() { }

  ngOnInit(): void {
  }

  addToCart(product: Product):void {
    console.log(product)
  }

}
