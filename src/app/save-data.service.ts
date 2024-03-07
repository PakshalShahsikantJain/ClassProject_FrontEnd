import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SaveDataService {
  
  private _saveDataUrl = "https://classproject-mean-backend.onrender.com/api/register";
  private _receiveDataUrl = "https://classproject-mean-backend.onrender.com/api/access";
  private _messageDataUrl = "https://classproject-mean-backend.onrender.com/api/message";


  /*
  private _saveDataUrl = "http://localhost:3000/api/register";
  private _receiveDataUrl = "http://localhost:3000/api/access";
  private _messageDataUrl = "http://localhost:3000/api/message";
  */

  constructor(private http: HttpClient) { }

  saveData(data: any)
  {
    return this.http.post<any>(this._saveDataUrl,data);
  }

  receiveData()
  {
    return this.http.get<any>(this._receiveDataUrl)
  }

  messageData(data : any) 
  {
    return this.http.post<any>(this._messageDataUrl,data);
  }

}
