import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from '../models/product';
import { products } from '../products-mock';
import { CartService } from '../services/cart.service';
import { NotificationService } from '../services/notification.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product [] = products;
  header: string = "Products";


  constructor(private cartService: CartService,
    private notification: NotificationService) { }


  ngOnInit(): void {

  }

  addToCart(product: Product):void {

    this.cartService.addToCart(product);

    let itemCount:number = this.cartService.getItems().length;

    this.notification.sendItemCount(itemCount);

    console.log(product)
  }

}
