import { Pipe,PipeTransform } from "@angular/core";
import {Activity} from "../models/activity";

@Pipe({
    name: "OrderBy"
})
export class OrderByPipe implements PipeTransform{
    transform(array: Activity[], args: string): Activity[] {
        array.sort((a: Activity, b: Activity) => {
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