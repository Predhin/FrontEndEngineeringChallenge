import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { debounceTime, first, map, Observable, switchMap } from 'rxjs';
import { AppService } from './core/app.service';
import { IPerson } from './shared/interfaces/iperson.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
}
