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
  form: FormGroup;
  formData: FormPractices;

  constructor(
    private fb: FormBuilder,
    private formPracticesData: FormPracticesService
  ) { }

  ngOnInit(): void {
    this.initializeForm();
    this.getFormData();
  }

  initializeForm(): void {
    this.form = this.fb.group({
      code: ['', Validators.required],
      ritardo: ['', Validators.required],
      cliente: ['', Validators.required],
      stato: ['', Validators.required],
      nome: ['', Validators.required],
      area_manager: ['', Validators.required]
    });
  }

  getFormData(): void {
    this.formPracticesData.getFormData().subscribe((data: FormPractices) => {
      this.formData = data;
      console.log(this.formData);
      this.populateForm();
    });
  }

  populateForm(): void {
    this.form.patchValue({
      code: this.formData.code,
      ritardo: this.formData.ritardo,
      cliente: this.formData.cliente,
      stato: this.formData.stato,
      nome: this.formData.nome,
      area_manager: this.formData.area_manager
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      console.log(this.form.value);
    } else {
      console.log('Form is invalid');
    }
  }
}

