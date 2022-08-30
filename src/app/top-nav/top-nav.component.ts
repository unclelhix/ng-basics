import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {

  isCollapsed = true;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }
  //How to get the value of added cart from this component
  //Cart Notification;

}
