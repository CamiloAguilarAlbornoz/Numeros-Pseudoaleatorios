import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CuadradosMediosComponent } from './components/cuadrados-medios/cuadrados-medios.component';
import { CongruencialLinealComponent } from './components/congruencial-lineal/congruencial-lineal.component';
import { CongruencialMultiplicativoComponent } from './components/congruencial-multiplicativo/congruencial-multiplicativo.component';
import { GraficaComponent } from './components/grafica/grafica.component';
import { DistribucionUniformeComponent } from './components/distribucion-uniforme/distribucion-uniforme.component';
import { DistribucionNormalComponent } from './components/distribucion-normal/distribucion-normal.component';
import { PruebaVarianzaComponent } from './components/prueba-varianza/prueba-varianza.component';
import { PruebaMediasComponent } from './components/prueba-medias/prueba-medias.component';
import { PruebaChiCuadradoComponent } from './components/prueba-chi-cuadrado/prueba-chi-cuadrado.component';
import { PruebaKolmogorovSmirnovComponent } from './components/prueba-kolmogorov-smirnov/prueba-kolmogorov-smirnov.component';
import { PruebaPokerComponent } from './components/prueba-poker/prueba-poker.component';

@NgModule({
  declarations: [
    AppComponent,
    CuadradosMediosComponent,
    CongruencialLinealComponent,
    CongruencialMultiplicativoComponent,
    GraficaComponent,
    DistribucionUniformeComponent,
    DistribucionNormalComponent,
    PruebaVarianzaComponent,
    PruebaMediasComponent,
    PruebaChiCuadradoComponent,
    PruebaKolmogorovSmirnovComponent,
    PruebaPokerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
