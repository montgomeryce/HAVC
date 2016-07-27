import {Component, Input} from '@angular/core';
import {Activity} from "../../models/activity";

@Component({
    selector: 'activity-header',
    moduleId: module.id,
    templateUrl: 'activity-header.component.html',
    styleUrls: ['activity-header.component.css']
})

export class TrainingHeaderComponent {
    error:any;
    @Input() activity: Activity;
    constructor() {

    }
}