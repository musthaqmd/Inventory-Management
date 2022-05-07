import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  alertbar()
  {
    alert('customer Added Sucessfully !!')
    // this.snackbar.open('Customer Added Succefully','close')
  }
}
