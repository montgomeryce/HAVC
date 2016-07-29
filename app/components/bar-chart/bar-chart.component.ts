import {Component, Attribute, ElementRef, Inject, Input, OnInit} from '@angular/core';
import * as d3 from 'd3';
import {Activity} from "../../models/activity";

@Component({
    selector: 'bar-chart',
    moduleId: module.id,
    template: `<ng-content></ng-content>`,
    styleUrls: ['bar-chart.component.css']
})
export class BarChartComponent implements OnInit{

    @Input() sessions:Activity[];
    private divs: any;
    private width: number;
    private height: number;
    private metric: string;
    private host;
    private htmlElement: HTMLElement;

    constructor(private element: ElementRef,
                @Attribute('metric') metric: string,
                @Attribute('width') width: number,
                @Attribute('height') height: number) {
        this.metric = metric;
        this.width = width;
        this.height = height;
        this.htmlElement = this.element.nativeElement;
        this.host = d3.select(this.element.nativeElement);
    }

    /**
     *
     * @param newValue
     * @param scale: scale the data to the appropriate size. (1=100%)
     */
    render(newValue,scale) {
        if (!newValue) return;

        this.divs.data(newValue).enter().append('div')
            .transition().ease('elastic')
            .style('width', d => d * scale )
            .text(d => Math.round(d));

    }
    ngOnInit(){
        console.log('ngOnInit ');

        this.divs = this.host.
        append('div').
        attr({
            'class': 'chart'
        }).
        style({
            'width':  this.width  + 'px',
            'height': this.height + 'px',
        }).
        selectAll('div');
        this.update();

    }

    update(){
        if(this.metric === 'totalCalories'){
            this.render( this.sessions.map(d => d.totalCalories),.10);
        }else if(this.metric === 'totalDistance'){
            this.render( this.sessions.map(d => Math.round(d.totalDistance*0.000621371192237)),4);
        }
    }


    OnChanges() {
        console.log('changes');
        this.update();

    }
}