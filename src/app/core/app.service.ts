import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private subject = new Subject<string>();
  private loadingCount = 0;
  public isLoading(): boolean {
    if (this.loadingCount === 0) {
      return false;
    } else {
      return true;
    }
  }
  addLoading(status: boolean) {
    if (status) {
      this.loadingCount++;
    } else {
      this.loadingCount--;
    }
  }
  /**
   * Add Error message
   * @param message - Error Message
   */
  addError(message: string): void {
    this.subject.next(message);
    setTimeout(() => {
      this.clearError();
    }, 3000);
  }
  clearError() {
    this.subject.next('');
  }
  /**
   * Listen for errors
   * @returns Observer Listening for Error
   */
  detectError(): Observable<any> {
    return this.subject.asObservable();
  }
}
