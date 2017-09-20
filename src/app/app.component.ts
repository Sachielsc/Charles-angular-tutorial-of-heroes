import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css'
    // '../styles.css'
  ],
  encapsulation: ViewEncapsulation.None
  // solve the bug that styleUrls not being loaded in Angular ChildComponent
  }
)

export class AppComponent {
  title = 'Tour of Heroes';
}
