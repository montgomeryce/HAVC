import {Component, OnInit} from '@angular/core';
import {TrainingService}         from '../../services/training.service';
import {Training} from "../../models/training";
import {Router} from "@angular/router";

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

    constructor(private trainingService:TrainingService,
                private router: Router) {

    }

    getListData() {
        console.log('********* getListData **********');

        this.trainingService
            .getTrainingSessions()
            .subscribe(data => {
                this.trainingSessions = data.json();
            });
    }

    ngOnInit() {
        this.getListData();
    }

}