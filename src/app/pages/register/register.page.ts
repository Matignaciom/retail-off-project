import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule],
})
export class RegisterPage {
  // Inicialización de las propiedades como cadenas vacías
  fullName: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private router: Router) {}

  // Método para navegar a la página de login
  navigateToLogin() {
    console.log('Navegando a la página de login');
    this.router.navigate(['/login']);
  }

  // Método para navegar a la página de inicio
  navigateToHome() {
    console.log('Navegando a la página de inicio');
    this.router.navigate(['/home']);
  }

  // Método para manejar el envío del formulario
  onSubmit() {
    // Verificar si todos los campos están completos
    if (!this.fullName || !this.email || !this.password || !this.confirmPassword) {
      console.log('Todos los campos son obligatorios');
      return; // Evitar continuar si algún campo está vacío
    }

    // Verificar si las contraseñas coinciden
    if (this.password === this.confirmPassword) {
      console.log('Formulario enviado', {
        fullName: this.fullName,
        email: this.email,
        password: this.password,
      });

      // Aquí puedes agregar la lógica para registrar al usuario, por ejemplo, enviando los datos a un servicio

      // Navegar a la página principal después de registrar
      this.router.navigate(['/home']);
    } else {
      console.log('Las contraseñas no coinciden');
    }
  }
}
