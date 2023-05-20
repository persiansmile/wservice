import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WikipediaService {
  constructor() {}
  public search(term: string) {
    return 'this some text as result of nothing';
  }
}
