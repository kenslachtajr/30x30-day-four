import { Component } from '@angular/core';

@Component({
  selector: 'computers-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dashboard';

  links = [
    { path: './computers', icon: 'work', title: 'Computers' },
  ]
}
