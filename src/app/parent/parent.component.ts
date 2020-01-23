import { Component, OnInit } from '@angular/core';
import { Info } from '../Info';
import { UserService } from '../user.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})

export class ParentComponent implements OnInit {
  public info: Info;
  public container: Array<Info>;
  registration: boolean = true;
  tableList: boolean = false
  newdata: Info;
  id: any;
  forEdit = false;
  editedId: any;

  constructor(private userData: UserService) {
    this.container = new Array<Info>();
    this.info = new Info();
  }

  ngOnInit() {
    this.userData.getData().subscribe(data => this.container = data)
    console.log(this.container)
  }

  onSubmit(info: any) {
    alert("Successfull!")
    if (this.forEdit) {      
      this.container.forEach(element => {
        if (element.id == this.editedId) {
          element.name = info.form.value.name;
          element.email = info.form.value.email;
          element.phone = info.form.value.phone;
        }
      });
      this.forEdit = false;
    } else {
      this.newdata = new Info;
      this.newdata.id = this.container.reduce(
        (max, array) => (array.id > max ? array.id : max),
        this.container[0].id) + 1;
      this.newdata.name = info.form.value.name
      this.newdata.email = info.form.value.email
      this.newdata.phone = info.form.value.phone
      this.container.push(this.newdata)
      // console.log(this.newdata);
      info.form.reset();
    }
    this.registration = false;
    this.tableList = true;
  }

  edit(info: any) {
    this.forEdit = true
    this.info = info;
    this.registration = true;
    this.tableList = false;
    this.editedId = info.id;
  }

  display() {
    this.registration = true;
    this.tableList = false;
  }
}