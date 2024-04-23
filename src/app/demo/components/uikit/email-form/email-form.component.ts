import { AfterViewInit, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import Quill from 'quill';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrl: './email-form.component.scss'
})
export class EmailFormComponent {
  destinatario: string;
  oggetto: string;
  messaggio: string;
  text: string;
  cc: string
  emailForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.emailForm = new FormGroup({
      destinatario: new FormControl('', [Validators.required, Validators.email]),
      oggetto: new FormControl('', [Validators.required, Validators.minLength(1)]),
      cc: new FormControl('', [Validators.email]),
      text: new FormControl(''),
    });
  }

  inviaEmail() {
    if (this.emailForm.valid) {
      // Invia l'email solo se il form è valido
      console.log('Invio email a:', this.emailForm.value.destinatario);
      console.log('Oggetto:', this.emailForm.value.oggetto);
      console.log('CC:', this.emailForm.value.cc);
      console.log('Messaggio:', this.emailForm.value.text);
      // Resetta il form dopo l'invio
      this.resetForm();
    } else {
      // Gestisci il caso in cui il form non è valido, ad esempio mostrando un messaggio all'utente
    }
  }

  resetForm() {
    this.emailForm.reset();
  }

}
