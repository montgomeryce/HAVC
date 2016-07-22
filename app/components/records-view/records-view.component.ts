import {Component, OnInit} from '@angular/core';
import {TrainingService}         from '../../services/training.service';
import {Training} from "../../models/training";

@Component({
    selector: 'records-view',
    moduleId: module.id,
    templateUrl: 'records-view.component.html',
    styleUrls: ['records-view.component.css'],
    pipes: []
})

export class RecordsViewComponent implements OnInit {
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