import {Injectable}    from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Activity} from "../models/activity";
import {ActivityData} from "../models/activity-data";

@Injectable()
export class ActivityService {

    //mock in-memory-db
    private activitiesUrl = 'app/activities';
    //private activitiesUrl = 'http://localhost:8080/activities/';

    constructor(private http:Http) {
    }


    /*getTrainingPromise(id:number):Promise<Activity> {
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

    getActivities() {
        return this.http.get(this.activitiesUrl)
            .toPromise()
            .then(response => response.json().data as Activity[])
            .catch(this.handleError);
    }
    getActivityData(id: number) {
        return this.http.get('app/activities')
            .toPromise()
            .then(response => response.json().data as ActivityData[])
            .catch(this.handleError);
    }
    getActivity(id: number) {
        return this.getActivities()
            .then(trainings => trainings.find(training => training.id === id));
    }
}