import {Component, OnInit} from '@angular/core';
import {TrainingService}         from '../../services/training.service';
import {Training} from "../../models/training";

@Component({
    selector: 'calendar-view',
    moduleId: module.id,
    templateUrl: 'calendar-view.component.html',
    styleUrls: ['calendar-view.component.css'],
    pipes: []
})

export class CalendarViewComponent implements OnInit {
    error:any;
    trainingSessions:Training[]

    constructor(private trainingService:TrainingService) {

    }

    getListData() {
        console.log('********* getListData **********');

        this.trainingService.getTrainingSessions().then(
            data => this.trainingSessions = data
        );
    }

    ngOnInit() {
        this.getListData();
    }

}