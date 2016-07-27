import {Component} from '@angular/core';
import {ActivityService}         from './services/activity.service';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {ActivityDetailComponent} from "./components/activity-detail/activity-detail.component";
import {ListViewComponent} from "./components/list-view/list-view.component";
import {CalendarViewComponent} from "./components/calendar-view/calendar-view.component";
import {StatisticsViewComponent} from "./components/statistics-view/statistics-view.component";
import {RecordsViewComponent} from "./components/records-view/records-view.component";

@Component({
    selector: 'my-app',
    moduleId: module.id, // turn on support for relative paths
    template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['/sessionList']">Activities</a>
      <a [routerLink]="['/calendar']">Calendar</a>
      <a [routerLink]="['/records']">Records</a>
      <a [routerLink]="['/statistics']">Statistics</a>
    </nav>
    <div id="content">
        <router-outlet></router-outlet>
    </div>
  `,
    styleUrls: ['app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ActivityService
    ],
    precompile: [ActivityDetailComponent,ListViewComponent,CalendarViewComponent,StatisticsViewComponent,RecordsViewComponent]
})

export class AppComponent {
    title = 'HAVC';
}