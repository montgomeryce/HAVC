import {Component,EventEmitter, Output} from '@angular/core';


@Component({
    selector: 'lc-menu',
    moduleId: module.id,
    templateUrl: 'lc-menu-view.html',
    styleUrls: ['lc-menu.component.css']
})

export class LCMenuComponent {
    @Output() configChange = new EventEmitter<string[]>();
    @Output() interpolationChange = new EventEmitter<string>();

    private d3interpolation = 'basis';//basis implements beta spline (smoothens )
    private items: string[] = ['HeartRate', 'Speed','Temperature', 'Altitude'];
    private interpolationValues = [
        {value: 'linear'},{value: 'step-before'},
        {value: 'step-after'},{value: 'basis'},
        {value: 'basis-open'},{value: 'basis-closed'},
        {value: 'cardinal'},{value: 'cardinal-open'},
        {value: 'cardinal-closed'},{value: 'monotone'}
    ];
    constructor() {
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

        this.configChange.emit(this.items);
        console.log('should be emitting here');

        console.log(this.items);
    }

    changeInterpolation(value){
        console.log('changing interpolation of d3 chart (child)' ,value);
        this.interpolationChange.emit(value);
    }
}