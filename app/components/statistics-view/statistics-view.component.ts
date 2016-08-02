import {Component, OnInit} from '@angular/core';
import {ActivityService} from '../../services/activity.service';
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
    activities:Activity[];

    constructor(private activityService:ActivityService) {
    }

    getData() {
        this.activityService.getActivities('date','desc',6).then(
            data => this.activities = data
        );
    }

    ngOnInit() {
        this.getData();
    }
}