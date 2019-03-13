import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';

const client_id = '80b609bf2aca1234e6fd';
const client_secret='c24ae7a27a10125b313853459de0555daeffe847';
const myheader = new HttpHeaders().set('Content-Type', 'application/form-data')
var body = new HttpParams(); 


@Injectable()
export class GithubService{
    private username = 'albicela';
    private client_id = '80b609bf2aca1234e6fd';
    private client_secret='c24ae7a27a10125b313853459de0555daeffe847';
    
    


    constructor(private _http:HttpClient){
        console.log('Github Service Init...');
    }
    
    getUser(){
        return this._http.get('https://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
        .map(res => res );
    }
    
    getRepos(){
        return this._http.get('https://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
        .map(res => res );
    }
    
    updateUsername(username:string){
        this.username = username;
    }
}
