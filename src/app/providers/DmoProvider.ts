import { Injectable } from '@angular/core';
import { ApiProvider } from './ApiProvider';
import { HttpClient } from '@angular/common/http';

import { Dmo } from '../models/Dmo';

@Injectable({
  providedIn: 'root'
})
export class DmoProvider extends ApiProvider<Dmo> {
  protected table_name: string = "dmoes";

  public getOneByLoginAndPassword(login: String, password: String): Promise<Dmo> {
    return this.RestProvider.get(this.api_endpoint + this.get_table_name() + "/search/findByLoginAndPassword?email=" + login + "&password=" + password)
      .then((res: Dmo) => {
        return res;
      })
  }
}
