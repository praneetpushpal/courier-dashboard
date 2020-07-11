import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AddparcelPayload} from './add-parcel/addparcel-payload';

@Injectable({
  providedIn: 'root'
})
export class AddParcelService {

  constructor(private httpClient: HttpClient) {
  }

  addParcel(addParcelPayload: AddparcelPayload){
    return this.httpClient.post('http://localhost:8080/api/parcel/addparcel', addParcelPayload);
  }

  // tslint:disable-next-line:ban-types
  getParcel(permaLink: Number): Observable<AddparcelPayload>{
    return this.httpClient.get<AddparcelPayload>('http://localhost:8080/api/parcel/track/' + permaLink);
  }
}
