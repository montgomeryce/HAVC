import {Component, OnInit} from '@angular/core';
import {ActivityService}         from '../../services/activity.service';
import {Activity} from "../../models/activity";
import {BarChartComponent} from "../bar-chart/bar-chart.component";

@Component({
    selector: 'statistics-view',
    moduleId: module.id,
    templateUrl: 'statistics-view.component.html',
    styleUrls: ['statistics-view.component.css'],
    directives: [BarChartComponent]
})

export class StatisticsViewComponent implements OnInit {
    trainingSessions:Activity[];

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