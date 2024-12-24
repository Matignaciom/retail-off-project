import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';  // Importa Router para la navegación

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
  standalone: true,  // Asegúrate de que esto esté presente
  imports: [CommonModule, FormsModule, IonicModule]  // Importa los módulos necesarios
})
export class UserProfilePage {
  user = {
    fullName: 'Juan Pérez',
    email: 'juanperez@example.com',
    phone: '+1234567890',
    address: '123 Calle Ficticia, Ciudad Ejemplo'
  };

  constructor(private router: Router) { }  // Inyecta el Router

  ngOnInit() {}

  // Método para cerrar sesión y navegar a la página de inicio
  logout() {
    console.log('Cerrando sesión...');
    this.router.navigate(['/home']);  // Redirige a la página de inicio
  }
}
