import { Component, Input } from '@angular/core';
import {
  IconDefinition,
  faMoneyBill,
  faUsers,
  faClock,
  faBriefcase,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-card',
  standalone: true, // ✅ WAJIB
  imports: [FontAwesomeModule], // ✅ Agar fa-icon bisa dipakai
  template: `
    <div class="card">
      <div class="card-header">
        {{ title }}
      </div>
      <div class="card-body">
        <div class="card-value">
          {{ value }}
        </div>
        <div class="card-change">{{ change }} Since Last Month</div>
      </div>
      <div class="card-icon">
        <fa-icon [icon]="icon"></fa-icon>
      </div>
    </div>
  `,
  styleUrls: ['./card.component.scss'], // pastikan file ini ada, atau hapus baris ini
})
export class CardComponent {
  @Input() title: string = '';
  @Input() value: number = 0;
  @Input() change: string = '';
  @Input() iconName: string = '';

  iconMappings: { [key: string]: IconDefinition } = {
    budget: faMoneyBill,
    project: faUsers,
    clock: faClock,
    briefcase: faBriefcase,
  };

  get icon(): IconDefinition {
    return this.iconMappings[this.iconName] || faMoneyBill;
  }
}
