import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
@Injectable()
export class CallAPI {

    constructor(private http: Http) { }
    private serverUrl = "http://192.168.1.16:8080/api/";
    
    putData(url,data: any) {
        let options = this.createRequestOptions();
        return this.http.put(this.serverUrl+url,  data , { headers: options })
            .map(res => res.json());
	}

	postData(url,data: any) {
        let options = this.createRequestOptions();
        return this.http.post(this.serverUrl+url,  data , { headers: options })
            .map(res => res.json());
	}
	
	getData(url) {
        let headers = this.createRequestOptions();
        return this.http.get(this.serverUrl+url, { headers: headers })
            .map(res => res.json());
    }

    private createRequestOptions() {
        let headers = new Headers({
            "Content-Type": "application/json"
        });
        return headers;
	}
}