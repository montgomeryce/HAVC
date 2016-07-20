import { Pipe, PipeTransform } from '@angular/core';
@Pipe({name: 'celsiusToFahrenheit'})
export class CelsiusToFahrenheitPipe implements PipeTransform {
  transform(value: number): number {
    return isNaN(value)?undefined:value*9/5+32;
  }
}