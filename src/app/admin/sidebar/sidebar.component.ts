import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Menue } from 'src/app/model/menue';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  constructor(private router:Router){}
  @Input() userRole:any;
  role:string;
  meenus:any[];
  ngOnInit(){
    this.role=localStorage.getItem('role');
    this.meenus=Menue.menues
  }
toNavigate(key:String){
  this.router.navigateByUrl("/"+key)
}

}
