import {Component, OnInit, Input} from '@angular/core';
import {Training} from "../../models/training";

@Component({
    selector: 'training-header',
    moduleId: module.id,
    templateUrl: 'training-header.component.html',
    styleUrls: ['training-header.component.css']
})

export class TrainingHeaderComponent implements OnInit {
    error:any;
    @Input() training: Training;
    constructor() {

    }

    ngOnInit() {
    }
}