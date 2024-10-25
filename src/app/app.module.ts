import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TvsComponent } from './tvs/tvs.component';
import { AddTvComponent } from './add-tv/add-tv.component';
import { UpdateTvComponent } from './update-tv/update-tv.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RechercheParMarqueComponent } from './recherche-par-marque/recherche-par-marque.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';


@NgModule({
  declarations: [
    AppComponent,
    TvsComponent,
    AddTvComponent,
    UpdateTvComponent,
    RechercheParMarqueComponent,
    RechercheParNomComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule ,
    ReactiveFormsModule 
     ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
