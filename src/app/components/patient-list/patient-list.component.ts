import { PatientService } from './../../services/patient.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  private patients: Array<any>;
  constructor(private patientService: PatientService) { }

  ngOnInit() {

    //GET patients list
    this.patientService.getPatients()
    .subscribe(patients => {
      this.patients = patients.json();
    });
  }

}
