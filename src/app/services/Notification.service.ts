import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NotificationService {
    private subject = new Subject<number>();

    notifyItemCount(itemCount: number) {
        this.subject.next(itemCount);
    }

    clearNotification() {
        this.subject.next();
    }

    onNotify(): Observable<number> {
        return this.subject.asObservable();
    }
}
