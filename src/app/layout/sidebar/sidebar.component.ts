import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faBookmark,
  faEnvelope,
  faChartPie,
  faHome,
} from '@fortawesome/free-solid-svg-icons';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatDrawerMode,
  MatSidenav,
  MatSidenavModule,
} from '@angular/material/sidenav';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    FontAwesomeModule,
    RouterLink,
    MatSidenavModule,
    MatButtonModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    // SidebarComponent,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    CommonModule,
  ], // ✅ Tambahkan ini
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'], // kita betulkan ini nanti di Error #2
})
export class SidebarComponent {
  bookmark = faBookmark; // pastikan ini dideklarasikan
  message = faEnvelope; // pastikan ini dideklarasikan
  chart = faChartPie;
  home = faHome;
  isExpanded: boolean = true;
  isShowing = false;
  showSubSubMenu: boolean = false;
  showSubmenu: boolean = false;

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }
}
