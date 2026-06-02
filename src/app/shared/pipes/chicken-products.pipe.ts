import {Pipe, PipeTransform} from '@angular/core';
import {ProductType} from "../../../types/product.type";

@Pipe({
  name: 'chickenProducts'
})
export class ChickenProductsPipe implements PipeTransform {
  // простой пайп, который позволит отобразить только те карточки товаров, которые в названии содержат "кур"
  transform(products: ProductType[]): ProductType[] {
    return products.filter(item => item.title.toLowerCase().includes('кур'));
  }

}
