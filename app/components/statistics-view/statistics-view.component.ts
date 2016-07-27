import {Component, OnInit} from '@angular/core';
import {TrainingService}         from '../../services/training.service';
import {Training} from "../../models/training";
import {BarChartComponent} from "../bar-chart/bar-chart.component";

@Component({
    selector: 'statistics-view',
    moduleId: module.id,
    templateUrl: 'statistics-view.component.html',
    styleUrls: ['statistics-view.component.css'],
    directives: [BarChartComponent]
})

export class StatisticsViewComponent implements OnInit {
    trainingSessions:Training[];

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