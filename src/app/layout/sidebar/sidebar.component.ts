import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faBookmark,
  faEnvelope,
  faChartPie,
  faHome,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [FontAwesomeModule], // ✅ Tambahkan ini
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'], // kita betulkan ini nanti di Error #2
})
export class SidebarComponent {
  bookmark = faBookmark; // pastikan ini dideklarasikan
  message = faEnvelope; // pastikan ini dideklarasikan
  chart = faChartPie;
  home = faHome;
}
