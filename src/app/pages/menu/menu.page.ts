import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importar Router para la navegación
import { IonicModule } from '@ionic/angular';  // Importar IonicModule

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
  standalone: true,  // Hacerlo un componente standalone
  imports: [IonicModule], // Importar IonicModule aquí
})
export class MenuPage {
  constructor(private router: Router) {}

  // Método para navegar al perfil
  navigateToProfile() {
    console.log('Navegando al perfil');
    this.router.navigate(['/profile']);
  }

  // Método para cambiar la contraseña
  changePassword() {
    console.log('Cambiando la contraseña');
    this.router.navigate(['/change-password']);
  }

  // Método para ir a configuraciones
  settings() {
    console.log('Navegando a configuraciones');
    this.router.navigate(['/settings']);
  }

  // Método para cerrar sesión
  logout() {
    console.log('Cerrando sesión');
    this.router.navigate(['/login']);
  }

  // Método para regresar a la página de inicio
  goHome() {
    console.log('Regresando a la página de inicio');
    this.router.navigate(['/home']);  // Navegar a la ruta '/home'
  }
}
