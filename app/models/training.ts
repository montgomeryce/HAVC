import {TrainingData} from "./training-data";

export class Training {
    id:number;
    name:string;
    date:string;
    person:string;
    activityType:string;
    totalCalories:number;
    totalDistance:number;
    totalTime:number;
    data:TrainingData[];
}
