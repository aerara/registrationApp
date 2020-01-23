import { Component, OnInit } from '@angular/core';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  userId: number;
  userInfo: Array<any> = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: UserService
  ) {}

  ngOnInit() {
    this.userId = this.route.snapshot.params['id'];

    this.service.viewData(this.userId).subscribe(posts =>{
      this.userInfo.push(posts);
      console.log(posts);
      
    })
  }

  backHome(){
    this.router.navigate(['/']);
  }
}