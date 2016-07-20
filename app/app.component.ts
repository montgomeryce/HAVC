import {Component} from '@angular/core';
import {TrainingService}         from './services/training.service';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {SessionDetailComponent} from "./components/session-detail/session-detail.component";
import {ListViewComponent} from "./components/list-view/list-view.component";

@Component({
    selector: 'my-app',
    moduleId: module.id, // turn on support for relative paths
    template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['/sessionList']">Sessions</a>
      <a [routerLink]="['/sessionDetail/56']">Detail</a>
      <a [routerLink]="['/tdAreaChart/56']">Area Chart</a>
      <a [routerLink]="['/tdLineChart/56']">Line Chart</a>
      <!--a [routerLink]="['/d3Trainer']">Bar Chart</a-->
    </nav>
    <div id="content">
        <router-outlet></router-outlet>
    </div>
  `,
    styleUrls: ['app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [
        TrainingService
    ],
    precompile: [SessionDetailComponent,ListViewComponent]
})

export class AppComponent {
    title = 'HAVC';
}