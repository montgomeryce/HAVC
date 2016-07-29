import {Component, OnInit} from '@angular/core';
import {ActivityService}         from '../../services/activity.service';
import {Activity} from "../../models/activity";
import {BarChartComponent} from "../bar-chart/bar-chart.component";

@Component({
    selector: 'records-view',
    moduleId: module.id,
    templateUrl: 'records-view.component.html',
    styleUrls: ['records-view.component.css'],
    directives: [BarChartComponent]
})

export class RecordsViewComponent implements OnInit {
    calBurnActs:Activity[];
    longestActs:Activity[];

    constructor(private trainingService:ActivityService) {

    }

    getData() {
        this.trainingService.getActivities('totalCalories','desc','6').then(
            data => this.calBurnActs = data
        );
        this.trainingService.getActivities('totalDistance','desc','6').then(
            data => this.longestActs = data
        );
    }

    ngOnInit() {
        this.getData();
    }
}