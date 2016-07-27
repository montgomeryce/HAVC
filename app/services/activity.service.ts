import {Injectable}    from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Training} from "../models/training";

@Injectable()
export class TrainingService {

    //mock in-memory-db
    private trainingsUrl = 'app/trainings';
    //private trainingsUrl = 'http://localhost:8080/training/';

    constructor(private http:Http) {
    }


    /*getTrainingPromise(id:number):Promise<Training> {
        console.log('********* getTrainingData **********');
        return this.http.get(trainingsUrl + id)
            .toPromise()
            .then(response => response.json())
            //.then((response) => console.log('Value: %s', response.json()))
            .catch(this.handleError)
    }
*/
    private handleError(error:any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    // URL to web api

    getTrainingSessions() {
        return this.http.get(this.trainingsUrl)
            .toPromise()
            .then(response => response.json().data as Training[])
            .catch(this.handleError);
    }
    getTraining(id: number) {
        return this.getTrainingSessions()
            .then(trainings => trainings.find(training => training.id === id));
    }
}