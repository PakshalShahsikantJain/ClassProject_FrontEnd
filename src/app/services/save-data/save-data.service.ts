import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { urlconstants } from 'src/app/constants/url-contants';

@Injectable({
  providedIn: 'root'
})

export class SaveDataService {
  private http = inject(HttpClient);
  private _baseUrl = urlconstants.BASE_URL;


  saveData(data: any)
  {
    return this.http.post<any>(this._baseUrl + urlconstants.API_SUFFIX.REGISTER,data);
  }

  receiveData()
  {
    return this.http.get<any>(this._baseUrl + urlconstants.API_SUFFIX.BATCHES_INFO);
  }

  messageData(data : any) 
  {
    return this.http.post<any>(this._baseUrl + urlconstants.API_SUFFIX.MESSAGE,data);
  }

}
