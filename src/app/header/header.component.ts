import { Component } from '@angular/core';
import { Path } from '../shared';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  path = Path;
}
