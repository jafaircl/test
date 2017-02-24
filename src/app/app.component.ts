import { Component } from '@angular/core';

import { ShellComponent } from './shell/shell.component';

import { SeoService } from './shared/services/seo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    SeoService
  ]
})
export class AppComponent {
  title = 'app works!';
}
