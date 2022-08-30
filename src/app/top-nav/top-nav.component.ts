import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NotificationService } from '../services/notification.service';


@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {

  isCollapsed = true;
  subscription: Subscription; //Substribing to not Subject Notification Service
  itemCount: number = 0;

  constructor(
    private notification: NotificationService) {

    this.subscription = this.notification.onItemChanged().subscribe(itemCount => {
      if (itemCount > 0) {
        this.itemCount = itemCount;
      } else {
        this.itemCount = 0;
      }
    });
  }

  ngOnInit(): void {
  }

}
