import {Component, Attribute, ElementRef, Inject, Input, OnInit} from '@angular/core';
import * as d3 from 'd3';
import {Training} from "../../models/training";

@Component({
    selector: 'bar-chart',
    moduleId: module.id,
    template: `<ng-content></ng-content>`,
    styleUrls: ['bar-chart.component.css']
})
export class BarChartComponent implements OnInit{

    @Input() sessions:Training[];
    private divs: any;
    private width: number;
    private height: number;
    private host;
    private htmlElement: HTMLElement;

    constructor(private element: ElementRef,
                @Attribute('width') width: number,
                @Attribute('height') height: number) {
        this.width = width;
        this.height = height;
        this.htmlElement = this.element.nativeElement;
        this.host = d3.select(this.element.nativeElement);
    }
    render(newValue) {
        console.log('rendervalue:',newValue);
        if (!newValue) return;

        this.divs.data(newValue).enter().append('div')
            .transition().ease('elastic')
            .style('width', d => d *.10 )
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
        this.render( this.sessions.map(d => d.totalCalories));

    }
    OnChanges() {
        console.log('changes');
        this.render(this.sessions.map(d => d.totalCalories));

    }
}