import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TvService } from '../services/tv.service';
import { Tv } from '../model/tv.model';
import { Marque } from '../model/marque.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailValidator } from '../validators/email-validator'; 

@Component({
  selector: 'app-add-tv',
  templateUrl: './add-tv.component.html',
})
export class AddTvComponent implements OnInit {
  marques!: Marque[]; // Changed to capitalize Marque to match the model
  addTvForm!: FormGroup;

  constructor(
    private router: Router,
    private tvService: TvService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.marques = this.tvService.listeMarques();

    this.addTvForm = this.fb.group({
      IdTv: ['', [Validators.required, Validators.minLength(1)]],
      nomTv: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, emailValidator()]],
      prixTv: ['', [Validators.required]],
      dateCreation: ['', [Validators.required]],
      idMar: ['', [Validators.required]]
    });
  }

  addTv() {
    if (this.addTvForm.invalid) {
      return;
    }

    const newTv = new Tv(); // Changed to create a new Tv instance
    newTv.nomTv = this.addTvForm.get('nomTv')?.value; // Changed fields to match Tv model
    newTv.email = this.addTvForm.get('email')?.value;
    newTv.prixTv = this.addTvForm.get('prixTv')?.value;
    newTv.dateCreation = this.addTvForm.get('dateCreation')?.value;
    newTv.marque = this.tvService.consulterMarque(this.addTvForm.get('idMar')?.value); // Changed to consult Marque
    
    this.tvService.ajouterTv(newTv); // Changed to add a Tv
    this.router.navigate(['tvs']); // Navigates to the tv list page
  }
}
