import { Pipe,PipeTransform } from "@angular/core";
import {Training} from "../models/training";

@Pipe({
    name: "OrderBy"
})
export class OrderByPipe implements PipeTransform{
    transform(array: Training[], args: string): Training[] {
        array.sort((a: Training, b: Training) => {
            if (a.date < b.date) {
                return -1;
            } else if (a.date > b.date) {
                return 1;
            } else {
                return 0;
            }
        });
        return array;
    }
}