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
        this.activityService.getActivities('date','desc').then(
            data => this.activities = data
        );
    }


    ngOnInit() {
        this.getListData();
    }

    onSelect(id: number) {
        console.log('onSelect', id);
        this.router.navigate(['/activityDetail',id]);
    }
    onSelectLine(id: number) {
        console.log('onSelectLine',id);
        this.router.navigate(['/lineChart', id]);
    }
}