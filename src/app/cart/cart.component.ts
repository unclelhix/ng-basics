import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  header:string = "Cart";

  items: Product[] = [];

  constructor(private cartService: CartService) {
    this.items =  this.cartService.getItems();
  }

  ngOnInit(): void {

  }

}
