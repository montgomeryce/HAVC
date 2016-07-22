import {Component, OnInit} from '@angular/core';
import {TrainingService}         from '../../services/training.service';
import {Training} from "../../models/training";

@Component({
    selector: 'statistics-view',
    moduleId: module.id,
    templateUrl: 'statistics-view.component.html',
    styleUrls: ['statistics-view.component.css'],
    pipes: []
})

export class StatisticsViewComponent implements OnInit {
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