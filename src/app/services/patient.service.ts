import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class PatientService {
    private apiUrl: string;
    constructor(private http: Http) {
        this.apiUrl = 'http://localhost:3000/';
    }


    public getPatients() {
        return this.http.get(this.apiUrl + 'api/patient');
    }

}