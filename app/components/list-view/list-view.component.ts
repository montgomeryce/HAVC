import {Component, OnInit} from '@angular/core';
import {ActivityService}         from '../../services/activity.service';
import {Activity} from "../../models/activity";
import {Router} from "@angular/router";
import {MetersToMilesPipe} from "../../pipes/meters-to-miles.pipe";

@Component({
    selector: 'list-view',
    moduleId: module.id,
    templateUrl: 'list-view.component.html',
    styleUrls: ['list-view.component.css'],
    pipes: [MetersToMilesPipe]
})

export class ListViewComponent implements OnInit {
    error:any;
    activities:Activity[];
    
    constructor(
        private activityService:ActivityService,
        private router: Router) {

    }

    getListData() {
        console.log('********* getListData **********');
        this.activityService.getActivities().then(
            data => this.activities = data
        );
    }


    ngOnInit() {
        this.getListData();
    }

    onSelect(id: number) {
        this.router.navigate(['/sessionDetail', id]);
    }
    onSelectLine(id: number) {
        this.router.navigate(['/tdLineChart', id]);
    }
    onSelectArea(id: number) {
        this.router.navigate(['/tdAreaChart', id]);
    }
}