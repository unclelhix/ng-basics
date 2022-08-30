import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NotificationService {
    private subject = new Subject<number>();

    sendItemCount(itemCount: number) {
        this.subject.next(itemCount);
    }

    clearNotification() {
        this.subject.next();
    }

    onItemChanged(): Observable<number> {
        return this.subject.asObservable();
    }
}
