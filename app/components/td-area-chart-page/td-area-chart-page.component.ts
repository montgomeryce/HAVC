import {Component, OnInit, OnDestroy} from '@angular/core';
import { TDAreaChartComponent }     from '../../components/td-area-chart/td-area-chart.component';
import { TDAreaChartConfig }   from '../../components/td-area-chart/td-area-chart-config';
import {TrainingService} from "../../services/training.service";
import {ActivatedRoute} from "@angular/router";
import {Training} from "../../models/training";

@Component({
    selector: 'area-chart-page',
    moduleId: module.id,
    templateUrl: 'td-area-chart-page.html',
    styleUrls: ['td-area-chart-page.css'],
    providers: [TrainingService],
    directives: [TDAreaChartComponent]
})


export class TDAreaChartPageComponent implements OnInit, OnDestroy {
    private train:Training;
    private tdAreaChartConfig: Array<TDAreaChartConfig>;
    private d3interpolation = 'monotone';
    private sub: any;
    private interpolationValues = [
        {value: 'linear'},{value: 'step-before'},
        {value: 'step-after'},{value: 'basis'}, //basis implements beta spline (smoothens )
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

                //=========================================================
                let altitude = new TDAreaChartConfig();
                altitude.settings = {
                    fill: 'rgba(1, 67, 163, 1)',
                    interpolation: this.d3interpolation
                };
                altitude.dataset = this.train.data.map(data => {
                    return {x: data.number, y: data.altitude};
                });
                //=========================================================
                let speed = new TDAreaChartConfig();
                speed.settings = {
                    fill: 'rgba(195, 0, 47, 1)',
                    interpolation: this.d3interpolation
                };
                speed.dataset = this.train.data.map(data => {
                    return {x: data.number, y: data.speed};
                });
                //=========================================================

                // to finish we append our AreaChartConfigs into an array of configs
                this.tdAreaChartConfig = new Array<TDAreaChartConfig>();
                this.tdAreaChartConfig.push(altitude);
                this.tdAreaChartConfig.push(speed);


            });
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    changeInterpolation(){
        console.log('changing interpolation of d3 chart ');
        this.ngOnInit();
    }
}