import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthLibService {
  private readonly userName = new BehaviorSubject<string | null>(null);
  userName$ = this.userName.asObservable();

  login(userName: string): void {
    this.userName.next(userName);
  }
}
