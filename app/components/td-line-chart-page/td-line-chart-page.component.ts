import {Component, OnInit, OnDestroy } from '@angular/core';
import { TDLineChartComponent }         from '../../components/td-line-chart/td-line-chart.component';
import { TDLineChartConfig }   from '../../components/td-line-chart/td-line-chart-config';
import {ActivityService} from "../../services/activity.service";
import {ActivatedRoute} from "@angular/router";
import {ActivityHeaderComponent} from "../activity-header/activity-header.component";
import {ActivityData} from "../../models/activity-data";
import {Activity} from "../../models/activity";


@Component({
    selector: 'line-chart-page',
    moduleId: module.id,
    templateUrl: 'td-line-chart-page.html',
    styleUrls: ['td-line-chart-page.css'],
    providers: [ActivityService],
    directives: [TDLineChartComponent, ActivityHeaderComponent]
})

export class TDLineChartPageComponent implements OnInit, OnDestroy {
    private activity:Activity;
    private activityData:ActivityData[];
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
    constructor(private activityService: ActivityService, private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let id = +params['id']; // (+) converts string 'id' to a number

            this.activityService.getActivity(id).then(
                data => {
                    this.activity = data;
                    // for now..
                    this.activityData = this.activity.data;
         /*       })
            this.activityService.getActivityData(id).then(
                data => {
                this.activityData = data;*/
                this.tdLineChartConfig = new Array<TDLineChartConfig>();


              /*  if(this.items.length<1) {
                    let empty = new TDLineChartConfig('',this.d3interpolation);
                    this.tdLineChartConfig.push(empty);
                }else {*/

                if (this.items.indexOf("Speed") > -1) {
                    let speed = new TDLineChartConfig('Speed','', 'orange',this.d3interpolation,'Line');

                    speed.dataset = this.activityData.map(data => {
                        return {x: data.number, y: data.speed};
                    });
                    this.tdLineChartConfig.push(speed);
                }
                if (this.items.indexOf("HeartRate") > -1) {
                    let hr = new TDLineChartConfig('HeartRate','', 'red',this.d3interpolation,'Line');

                    hr.dataset = this.activityData.map(data => {
                        return {x: data.number, y: data.heartRate};
                    });
                    this.tdLineChartConfig.push(hr);
                }
                if (this.items.indexOf("Temperature") > -1) {
                    let temp = new TDLineChartConfig('Temperature','', 'green',this.d3interpolation,'Line');

                    temp.dataset = this.activityData.map(data => {
                        return {x: data.number, y: data.temperature};
                    });
                    this.tdLineChartConfig.push(temp);
                }
                if (this.items.indexOf("Altitude") > -1) {
                    let altitude = new TDLineChartConfig('Altitude','rgba(1, 67, 163, .1)', 'blue',this.d3interpolation,'Area');

                    altitude.dataset = this.activityData.map(data => {
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