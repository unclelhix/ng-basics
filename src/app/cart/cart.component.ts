import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  header:string = "Cart";
  items = this.cartService.getItems();
  constructor(private cartService: CartService) { }

  ngOnInit(): void {

  }

}
