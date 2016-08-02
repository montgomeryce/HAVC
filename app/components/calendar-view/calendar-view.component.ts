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
    activities:Activity[]

    constructor(private activityService:ActivityService) {}

    getListData() {
        console.log('********* getListData **********');

        this.activityService.getActivities().then(
            data => this.activities = data
        );
    }

    ngOnInit() {
        this.getListData();
    }

}