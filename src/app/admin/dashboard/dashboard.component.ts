import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  
  
  @Input() userRole
  role:string;
  ngOnInit(){
    this.role=localStorage.getItem('role');
  }

}
