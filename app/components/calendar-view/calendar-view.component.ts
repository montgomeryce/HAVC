import {Component, OnInit} from '@angular/core';
import {ActivityService}         from '../../services/activity.service';
import {Activity} from "../../models/activity";

@Component({
    selector: 'calendar-view',
    moduleId: module.id,
    templateUrl: 'calendar-view.component.html',
    styleUrls: ['calendar-view.component.css']
})

export class CalendarViewComponent implements OnInit {
    error:any;
    trainingSessions:Activity[]

    constructor(private trainingService:ActivityService) {}

    getListData() {
        console.log('********* getListData **********');

        this.trainingService.getActivities().then(
            data => this.trainingSessions = data
        );
    }

    ngOnInit() {
        this.getListData();
    }

}