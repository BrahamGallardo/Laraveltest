import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Hubspot } from './hubspot';

@Injectable({
  providedIn: 'root'
})
export class HubspotService {

  constructor() { }
}
