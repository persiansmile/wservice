import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private wikipedia: WikipediaService) {}
  title = 'wservice';
  onTerm(term: string) {
    const result = this.wikipedia.search(term);
    console.log(result);
  }
}
