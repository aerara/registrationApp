import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Info } from '../Info';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  // public fullname: String;
  // public email: String;
  // public gender: String;
  // counter: number = 0;
  public info: Info;
  public container: Array<Info>;
  registration: boolean = true;
  tableList: boolean = false

  constructor() {
    this.container = new Array<Info>();
    this.info = new Info();
  }

  ngOnInit() {
  }

  onSubmit(info: any) {
    alert("Successfull!")
    this.container.push(info.form.value)
    info.form.reset();

    this.registration = false;
    this.tableList = true;
  }

  edit(info: any) {
    this.info = info;
    this.registration = true;
    this.tableList = false;
    this.container = this.container.filter(callback => {
      if (callback != info) {
        return callback;
      }
    })
  }

  display() {
    this.registration = true;
    this.tableList = false;
  }


  // formValue: any;
  // onSubmit(form: NgForm) {
  //   this.formValue = form.value;
  //   console.log(this.formValue);
  // this.name = this.formValue.name;
  // this.email = this.formValue.email;
  // this.gender = this.formValue.gender;
  // }
}
