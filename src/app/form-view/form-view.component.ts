import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-view',
  templateUrl: './form-view.component.html',
  styleUrls: ['./form-view.component.scss']
})
export class FormViewComponent implements OnInit {
  email = '';
  password = ''

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.email + '\n' + this.password)
  }
}
