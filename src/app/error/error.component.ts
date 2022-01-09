import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from '../core/app.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorComponent implements OnInit {
  error!: Observable<string>;
  constructor(private appService: AppService) { }
  ngOnInit() {
    this.error = this.appService.detectError();
  }

}
