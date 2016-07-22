import {Component, OnInit} from '@angular/core';
import {TrainingService}         from '../../services/training.service';
import {Training} from "../../models/training";
import {Router} from "@angular/router";

@Component({
    selector: 'list-view',
    moduleId: module.id,
    templateUrl: 'list-view.component.html',
    styleUrls: ['list-view.component.css'],
    pipes: []
})

export class ListViewComponent implements OnInit {
    error:any;
    trainingSessions:Training[];
    
    constructor(
        private trainingService:TrainingService,
        private router: Router) {

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