import { environment } from './../../environments/environment.prod';
import { AppService } from './../core/app.service';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, map, debounceTime, switchMap, tap, delay } from 'rxjs';
import { IPerson } from '../shared/interfaces/iperson.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit {

  URL = environment.URL;
  results!: Observable<IPerson[]>;
  q!: string;
  constructor(private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    public appService: AppService) { }
  ngOnInit() {
    Promise.resolve(() => { this.q = this.route.snapshot.queryParamMap.get("q") as string; })
    this.results = this.route.queryParamMap.pipe(
      map(query => {
        return query.get("q") as string;
      }),
      tap((q) => {
        this.q = this.q !== q ? q : this.q;
      }),
      debounceTime(100),
      switchMap((q) => this.http.get<IPerson[]>(`${this.getURL(q as string)}`)),
    );
  }
  /**
   * Update the Search query param
   * @param q - Search query
   */
  updateSearchResult(q: string): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { q },
      queryParamsHandling: "merge",
    });
  }
  trackByFuntion(index: number, item: IPerson): string {
    return item._id;
  }
  /**
   *  Get URL
   * @param q - Search query
   * @returns URL with query param
   */
  getURL(q: string): string {
    return !q ? this.URL : `${this.URL}?q=${q}`;
  }

}
