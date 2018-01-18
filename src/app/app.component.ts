import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', './app-mobile.component.scss', './shared/layouts/sidebar/sidebar.component.scss']
})
export class AppComponent {
  @ViewChild('sidenav') public mySidenav: MatSidenav;
  counter = 0;
  isOpen = false;

  toggle() {
    if (this.counter++ === 0) { return; }
    if (!this.isOpen) {
      this.mySidenav.open();
      this.isOpen = true;
    } else {
      this.mySidenav.close();
      this.isOpen = false;
    }
    this.counter = 0;
  }
}
