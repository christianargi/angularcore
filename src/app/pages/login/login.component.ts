import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  providers: [AuthService], // ✅ Tambahkan ini!
  templateUrl: './login.component.html',
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    if (this.username === 'admin' && this.password === 'admin') {
      this.auth.login('fake-token');
      this.router.navigate(['/dashboard']);
    } else {
      alert('Login gagal!');
    }
  }
}
