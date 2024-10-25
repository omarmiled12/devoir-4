import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TvsComponent } from './tvs/tvs.component';
import { AddTvComponent } from './add-tv/add-tv.component';
import { UpdateTvComponent } from './update-tv/update-tv.component';
import { RechercheParMarqueComponent } from './recherche-par-marque/recherche-par-marque.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';

const routes: Routes = [
  { path: 'tvs', component: TvsComponent },
  { path: 'add-tv', component: AddTvComponent },
  { path: 'update-tv/:id', component: UpdateTvComponent }, // Route with ID parameter
  { path: '', redirectTo: '/tvs', pathMatch: 'full' }, // Default route
 {path : 'rechercheParMarque', component:RechercheParMarqueComponent},
 {path: "rechercheParNom", component : RechercheParNomComponent},

];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
