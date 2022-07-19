import { Injectable } from '@angular/core';
import { Creator, Product } from '../FactoryMethod/FactoryMethod';
import { WpisAkwarystycznyService } from './Wpisy/wpis-akwarystyczny.service';

@Injectable({
  providedIn: 'root'
})
export class AkwarystykaService extends Creator{

  constructor() {
    super();
  }

  public factoryMethod(): Product {
    return new WpisAkwarystycznyService();
  }


}
