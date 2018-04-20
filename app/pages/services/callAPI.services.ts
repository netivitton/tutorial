import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
@Injectable()
export class CallAPI {

    constructor(private http: Http) { }
	private serverUrl = "http://192.168.1.16:8080/api/users/1";
	postData(data: any) {
        let options = this.createRequestOptions();
        return this.http.post(this.serverUrl, { data }, { headers: options })
            .map(res => res.json());
	}
	
	getData() {
        let headers = this.createRequestOptions();
        return this.http.get(this.serverUrl, { headers: headers })
            .map(res => res.json());
    }

    private createRequestOptions() {
        let headers = new Headers({
            "Content-Type": "application/json"
        });
        return headers;
	}
}