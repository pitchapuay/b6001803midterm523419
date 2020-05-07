import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  productForm = new FormGroup({
    type: new FormControl(''),
    p_id: new FormControl(''),
    p_name: new FormControl(''),
    p_detail: new FormControl(''),
    p_quantity: new FormControl('', [Validators.min(1)]),
    p_price: new FormControl('', [Validators.min(1), Validators.max(100000)])

  });

  productType: string[] = ['','CPU', 'RAM', 'HDD', 'Mainboard'];

  constructor() { }

  ngOnInit(): void {
  }

  checkForm() {
    return this.productForm.invalid ? "INVALID" : "VALID";
  }


}
