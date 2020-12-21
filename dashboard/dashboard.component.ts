import { Component, OnInit } from '@angular/core';
import { LoginServicesService } from '../login-services.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit 
{
  userData : any;
  userDetails : any;
  userRoleId :number =0 ;
  name : any;
  theme:any=sessionStorage.getItem('theme')

  activeclass:string='';

  constructor(private loginService : LoginServicesService) 
  {
    this.getUserDetails();
   }

  ngOnInit(): void {
   
  }
  setTheme(theme:any){

    sessionStorage.setItem('theme',theme )
    this.theme=sessionStorage.getItem('theme')

  }

 getUserDetails()
 {
  this.loginService.getuserDetails().subscribe((data)=>{
    this.userData =JSON.stringify(data);
    this.userDetails= JSON.parse(this.userData);
    this.userRoleId = this.userDetails.roleid;
    this.name = this.userDetails.name;
   

  });
 
 }

 getLoginDetails()
 {
   
     console.log(JSON.parse(this.loginService.getLoginDetails()).name);
   
 }
}
