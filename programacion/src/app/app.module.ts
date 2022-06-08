import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AutorComponent } from './autor/autor.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeTarjetaComponent } from './home-tarjeta/home-tarjeta.component';
import { AboutPrimarioComponent } from './about-primario/about-primario.component';
import { AboutSecundarioComponent } from './about-secundario/about-secundario.component';
import { HomeSecundarioComponent } from './home-secundario/home-secundario.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AutorComponent,
    NavbarComponent,
    HomeTarjetaComponent,
    AboutPrimarioComponent,
    AboutSecundarioComponent,
    HomeSecundarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
