import { provideRouter, RouterConfig }  from '@angular/router';
import {TDLineChartPageComponent}         from './components/td-line-chart-page/td-line-chart-page.component';
import {ListViewComponent} from "./components/list-view/list-view.component";
import {ActivityDetailComponent}     from './components/activity-detail/activity-detail.component';
import {RecordsViewComponent} from "./components/records-view/records-view.component";
import {StatisticsViewComponent} from "./components/statistics-view/statistics-view.component";
import {CalendarViewComponent} from "./components/calendar-view/calendar-view.component";

const routes: RouterConfig = [
    {path: 'sessionList', component: ListViewComponent},
    {path: 'sessionDetail/:id',  component: ActivityDetailComponent},
    {path: 'tdLineChart/:id',  component: TDLineChartPageComponent},
    {path: 'calendar',  component: CalendarViewComponent},
    {path: 'records',  component: RecordsViewComponent},
    {path: 'statistics',  component: StatisticsViewComponent}
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
