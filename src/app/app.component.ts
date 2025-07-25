import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component'; // import komponen
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { CardComponent } from './components/card/card.component';
import { HeaderComponent } from './layout/header/header.component';
import { AboutComponent } from './pages/about/about.component';


@Component({
  selector: 'app-root',
  template: '<router-outlet />',
  imports: [RouterOutlet],
})
export class AppComponent {
  title = 'angular-core';
}
