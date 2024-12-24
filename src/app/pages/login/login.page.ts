import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule], // Importar los módulos necesarios
})
export class LoginPage {
  constructor(private router: Router) {}

  // Método para navegar a la página de registro
  navigateToRegister() {
    console.log('Navegando a la página de registro');
    this.router.navigate(['/register']);
  }

  // Método para navegar a la página de inicio
  navigateToHome() {
    console.log('Navegando a la página de inicio');
    this.router.navigate(['/home']);
  }
}
