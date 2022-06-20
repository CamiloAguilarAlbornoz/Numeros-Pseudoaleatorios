import { DistribucionNormalComponent } from './components/distribucion-normal/distribucion-normal.component';
import { DistribucionUniformeComponent } from './components/distribucion-uniforme/distribucion-uniforme.component';
import { CongruencialMultiplicativoComponent } from './components/congruencial-multiplicativo/congruencial-multiplicativo.component';
import { CongruencialLinealComponent } from './components/congruencial-lineal/congruencial-lineal.component';
import { CuadradosMediosComponent } from './components/cuadrados-medios/cuadrados-medios.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path : '', component : CuadradosMediosComponent},
  {path : 'cuadradosMedios', component : CuadradosMediosComponent},
  {path : 'congruenlcialLineal', component : CongruencialLinealComponent},
  {path : 'congruenlcialMultiplicativo', component : CongruencialMultiplicativoComponent},
  {path : 'distribucionUniforme', component : DistribucionUniformeComponent},
  {path : 'distribucionNormal', component : DistribucionNormalComponent},
  {path : '**', component : CuadradosMediosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash : true, relativeLinkResolution: 'legacy'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
