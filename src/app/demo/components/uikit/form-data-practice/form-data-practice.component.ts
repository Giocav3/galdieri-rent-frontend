import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormPracticesService } from 'src/app/demo/service/form-practices.service';
import { FormPractices } from 'src/app/demo/api/form-practices';


@Component({
  selector: 'app-form-data-practice',
  templateUrl: './form-data-practice.component.html',
  styleUrl: './form-data-practice.component.scss'
})
export class FormDataPracticeComponent implements OnInit {
  formData: FormPractices;
  mesi: string = '36'
  km: string = '10000'
  casa_locatrice: string = 'LEASYS'
  anticipo: string = '0'

  constructor(
    private fb: FormBuilder,
    private formService: FormPracticesService
  ) { }

  ngOnInit(): void {
    this.formService.getFormData().subscribe(data => {
      this.formData = data;
    })
  }

}

