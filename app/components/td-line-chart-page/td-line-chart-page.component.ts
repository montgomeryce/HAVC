import {Component, OnInit, OnDestroy } from '@angular/core';
import { TDLineChartComponent }         from '../../components/td-line-chart/td-line-chart.component';
import { TDLineChartConfig }   from '../../components/td-line-chart/td-line-chart-config';
import {TrainingService} from "../../services/training.service";
import {ActivatedRoute} from "@angular/router";
import {Training} from "../../models/training";

@Component({
    selector: 'line-chart-page',
    moduleId: module.id,
    templateUrl: 'td-line-chart-page.html',
    styleUrls: ['td-line-chart-page.css'],
    providers: [TrainingService],
    directives: [TDLineChartComponent]
})

export class TDLineChartPageComponent implements OnInit, OnDestroy {
    private train:Training;
    private tdLineChartConfig: Array<TDLineChartConfig>;
    private d3interpolation = 'basis';//basis implements beta spline (smoothens )
    private sub: any;
    private items: string[] = ['HeartRate', 'Speed','Temperature', 'Altitude'];
    private interpolationValues = [
        {value: 'linear'},{value: 'step-before'},
        {value: 'step-after'},{value: 'basis'},
        {value: 'basis-open'},{value: 'basis-closed'},
        {value: 'cardinal'},{value: 'cardinal-open'},
        {value: 'cardinal-closed'},{value: 'monotone'}
    ];
    constructor(private trainingService: TrainingService, private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let id = +params['id']; // (+) converts string 'id' to a number
            this.trainingService.getTraining(id).subscribe(data => {
                this.train = data.json();
                this.tdLineChartConfig = new Array<TDLineChartConfig>();

              /*  if(this.items.length<1) {
                    let empty = new TDLineChartConfig('',this.d3interpolation);
                    this.tdLineChartConfig.push(empty);
                }else {*/

                if (this.items.indexOf("Speed") > -1) {
                    let speed = new TDLineChartConfig('', this.d3interpolation);

                    speed.dataset = this.train.data.map(data => {
                        return {x: data.number, y: data.speed};
                    });
                    this.tdLineChartConfig.push(speed);
                }
                if (this.items.indexOf("HeartRate") > -1) {
                    let hr = new TDLineChartConfig('', this.d3interpolation);

                    hr.dataset = this.train.data.map(data => {
                        return {x: data.number, y: data.heartrate};
                    });
                    this.tdLineChartConfig.push(hr);
                }
                if (this.items.indexOf("Temperature") > -1) {
                    let temp = new TDLineChartConfig('', this.d3interpolation);

                    temp.dataset = this.train.data.map(data => {
                        return {x: data.number, y: data.temperature};
                    });
                    this.tdLineChartConfig.push(temp);
                }
                if (this.items.indexOf("Altitude") > -1) {
                    let altitude = new TDLineChartConfig('', this.d3interpolation);

                    altitude.dataset = this.train.data.map(data => {
                        return {x: data.number, y: data.altitude*.10};
                    });
                    this.tdLineChartConfig.push(altitude);
                }

            });
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }


    toggleSpeed(){
        this.toggle("Speed");
    }
    toggleHeartRate(){
        this.toggle("HeartRate");
    }
    toggleTemperature(){
        this.toggle("Temperature");
    }
    toggleAltitude(){
        this.toggle("Altitude");
    }
    toggle(param){
        var index = this.items.indexOf(param, 0);
        if (index > -1) {
            this.items.splice(index, 1);
        }else{
            this.items.push(param);
        }

        console.log(this.items);
        this.ngOnInit();
    }

    changeInterpolation(){
        console.log('changing interpolation of d3 chart ');
        this.ngOnInit();
    }
}