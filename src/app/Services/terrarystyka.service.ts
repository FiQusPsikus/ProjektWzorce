import { Injectable } from '@angular/core';
import { Creator, Product } from '../FactoryMethod/FactoryMethod';
import { WpisTerrarystycznyService } from './Wpisy/wpis-terrarystyczny.service';

@Injectable({
  providedIn: 'root'
})
export class TerrarystykaService extends Creator{

  constructor() {
    super();
  }
  
  public factoryMethod(): Product {
    return new WpisTerrarystycznyService();
  }
}
