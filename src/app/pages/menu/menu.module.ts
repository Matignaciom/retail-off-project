import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';  // Importar RouterModule para manejar navegación

import { MenuPageRoutingModule } from './menu-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuPageRoutingModule,  // Asegúrate de importar las rutas de la página de menú
    RouterModule
  ]
})
export class MenuPageModule {}
