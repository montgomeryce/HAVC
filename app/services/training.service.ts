import {Injectable}    from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Observable';
import {Training} from "../models/training";

@Injectable()
export class TrainingService {

    constructor(private http:Http) {
    }


    getTrainingPromise(id:number):Promise<Training> {
        console.log('********* getTrainingData **********');
        return this.http.get('http://localhost:8080/training/' + id)
            .toPromise()
            .then(response => response.json())
            //.then((response) => console.log('Value: %s', response.json()))
            .catch(this.handleError)
    }

    private handleError(error:any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }


    getTraining(id:number):Observable<any> {
        return this.http.get('http://localhost:8080/training/' + id);
    }

    getTrainingSessions():Observable<any> {
        return this.http.get('http://localhost:8080/trainings');
    }


}