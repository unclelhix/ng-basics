import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from '../services/cart.service';
import { NotificationService } from '../services/Notification.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {

  isCollapsed = true;
  subscription: Subscription;
  itemCount: number = 0;

  constructor(private cartService: CartService,
    private notification: NotificationService) {
      this.subscription = this.notification.onNotify().subscribe(itemCount => {
        if (itemCount > 0) {
            this.itemCount = itemCount;
        } else {
            // clear messages when empty message received
            this.itemCount = 0;
        }
    });

    }

  ngOnInit(): void {
  }
  //How to get the value of added cart from this component
  //Cart Notification;

}
