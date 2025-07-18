import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faPen,
  faPlus,
  faMoneyBill,
  faUsers,
  faClock,
  faBriefcase,
} from '@fortawesome/free-solid-svg-icons';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-dashboard',
  standalone: true, // ✅ Tambahkan ini
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports: [FontAwesomeModule, CardComponent],
})
export class DashboardComponent {
  edit = faPen;
  create = faPlus;
  budget = faMoneyBill;
  project = faUsers;
  time = faClock;
  work = faBriefcase;
}
