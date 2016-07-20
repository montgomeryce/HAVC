import {Component, OnInit, OnDestroy} from '@angular/core';
import {Training}                from '../../models/training';
import {TrainingService}         from '../../services/training.service';
import {CelsiusToFahrenheitPipe} from '../../pipes/celsius-to-fahrenheit.pipe';
import {TrainingData} from "../../models/training-data";
import {ActivatedRoute, Router} from "@angular/router";
import {SecondsToMinutesPipe} from "../../pipes/seconds-to-minutes.pipe";

@Component({
    selector: 'session-detail',
    moduleId: module.id,
    templateUrl: 'session-detail.component.html',
    pipes: [CelsiusToFahrenheitPipe,SecondsToMinutesPipe],
    styleUrls: ['session-detail.component.css']

})

export class SessionDetailComponent implements OnInit,OnDestroy {
    private train:Training;
    private trainData:TrainingData[];
    private error:any;
    private sub: any;

    constructor(private trainingService:TrainingService,private route: ActivatedRoute) {

    }
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let id = +params['id']; // (+) converts string 'id' to a number
            this.trainingService.getTraining(id).subscribe(data => {
                this.train = data.json();
                this.trainData = this.train.data;
            });
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}