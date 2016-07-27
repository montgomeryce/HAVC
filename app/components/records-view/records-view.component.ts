import {Component, OnInit} from '@angular/core';
import {ActivityService}         from '../../services/activity.service';
import {Activity} from "../../models/activity";

@Component({
    selector: 'records-view',
    moduleId: module.id,
    templateUrl: 'records-view.component.html',
    styleUrls: ['records-view.component.css'],
    pipes: []
})

export class RecordsViewComponent implements OnInit {
    error:any;
    trainingSessions:Activity[]

    constructor(private trainingService:ActivityService) {

    }

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