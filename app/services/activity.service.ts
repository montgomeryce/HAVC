import {Injectable}    from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Activity} from "../models/activity";
import {ActivityData} from "../models/activity-data";

@Injectable()
export class ActivityService {

    //mock in-memory-db
    //private activitiesUrl = 'app/activities';
    private activitiesUrl = 'http://localhost:8080/activities'; // desc doesnt appear to be working..

    constructor(private http:Http) {
    }

    private handleError(error:any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    /**
     * 
     * @param sortBy
     * @param direction
     * @param limit // has to be under default size of the page(20) for now 
     * @returns {Promise<Activity[]>|Promise<void>}
     */
    getActivities(sortBy: string,direction:string, limit:number) {
    
        console.log('getActivities()', this.activitiesUrl);
        var query='?1=1';//hack to get around unknown first param
        if(sortBy!==undefined){
            query += '&sort='+sortBy+',' + (direction==='desc'?'desc':'asc');
        }
        if(limit>0){
            query +='&size='+limit;
        }
        if(limit>21){
            console.warn('limit is over the default page size. data will be limited to 20');
        }
        
        console.log(this.activitiesUrl + query);
        return this.http.get(this.activitiesUrl + query)
            .toPromise()
            //.then(data => data._body.data['_embedded'].activities as Activity[])
            .then(data => data.json()._embedded.activities as Activity[])
            //.then(data =>{
             //   console.log('DATA: ',data);
                /*console.log('data:', data);
                console.log('data.json()',data.json());
                console.log('data.json()._embedded',data.json()._embedded);*/
                //console.log('data.json()._embedded.activities',data.json()._embedded.activities);


                //data.json().activities as Activity[];
                //data._body.data['_embedded'].activities as Activity[]
                //data.json().data as Activity[]
                //data['_embedded'].activities as Activity[]
                // Set the products Array
                //this.products = data['_embedded'].products;
            //})
            .catch(this.handleError);
    }
    getActivityData(id: number) {
        console.log('getActivityData('+id+')');
        //return this.http.get('app/activities/'+id+'/data')
        return this.http.get('http://localhost:8080/activities/'+id+'/data')
            .toPromise()
            .then(data => data.json().data as ActivityData[])
            .catch(this.handleError);
    }
    getActivity(id: number) {
        console.log('getActivity('+id+')');

        return this.getActivities()
            .then(activities => activities.find(activity => activity.id === id));
    }
}