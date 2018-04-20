import { Component, OnInit } from '@angular/core';
import { Page } from "ui/page";
import { RouterExtensions } from "nativescript-angular/router" 
import { Http, Headers, RequestOptions } from "@angular/http";
import "rxjs/add/operator/map";
import { CallAPI } from "../services/callAPI.services"
import { setString } from "application-settings"
@Component({
	moduleId: module.id,
	selector: 'login',
	templateUrl: 'login.html',
	styleUrls: ['login.css'],
	providers:[CallAPI]

})

export class LoginComponent implements OnInit {
	email = "mail@freewill.comxxxxxxxx";
	password = "password";
	message;
	public host: string;
    public userAgent: string;
    public origin: string;
    public url: string;
	constructor(private page: Page,private routerExtensions: RouterExtensions,private mycallAPI: CallAPI) { 
		page.actionBarHidden = true;
	}

    ngOnInit() { }
    login(){
		this.extractData("login",{
			"email":this.email,
			"password": this.password
		   });
       
	}

	

	extractData(url,data) {
        this.mycallAPI.postData(url,data)
            .subscribe((result) => {
				setString("bean",JSON.stringify(result));
				this.routerExtensions.navigate(["/profile"],{ clearHistory: true });
            }, (error) => {
				
				console.log(error);
            });
    }
}