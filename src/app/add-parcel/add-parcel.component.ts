import { Component, OnInit } from '@angular/core';
import {AddparcelPayload} from './addparcel-payload';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AuthService} from '../auth/auth.service';
import {Router} from '@angular/router';
import {AddParcelService} from '../add-parcel.service';

@Component({
  selector: 'app-add-parcel',
  templateUrl: './add-parcel.component.html',
  styleUrls: ['./add-parcel.component.css']
})
export class AddParcelComponent implements OnInit {

  addParcelForm: FormGroup;
  addParcelPayload: AddparcelPayload;

  // tslint:disable-next-line:max-line-length
  constructor(private addParcelService: AddParcelService, private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    this.addParcelForm = this.formBuilder.group({
      sourceAddress: '',
      destinationAddress: '',
      itemType: '',
      weight: '',
      price: '',
      pickupDate: '',
      expectedDelivery: ''
    });
    this.addParcelPayload = {
      sourceAddress: '',
      destinationAddress: '',
      itemType: '',
      weight: '',
      price: '',
      pickupDate: '',
      expectedDelivery: ''
    };
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.addParcelPayload.sourceAddress = this.addParcelForm.get('sourceAddress').value;
    this.addParcelPayload.destinationAddress = this.addParcelForm.get('destinationAddress').value;
    this.addParcelPayload.itemType = this.addParcelForm.get('itemType').value;
    this.addParcelPayload.weight = this.addParcelForm.get('weight').value;
    this.addParcelPayload.price = this.addParcelForm.get('price').value;
    this.addParcelPayload.pickupDate = this.addParcelForm.get('pickupDate').value;
    this.addParcelPayload.expectedDelivery = this.addParcelForm.get('expectedDelivery').value;

    this.addParcelService.addParcel(this.addParcelPayload).subscribe(data => {
      this.router.navigateByUrl('/');
    }, error => {
      console.log('Failure Response');
    });
  }

}
