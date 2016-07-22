import { provideRouter, RouterConfig }  from '@angular/router';
import {TDAreaChartPageComponent}         from './components/td-area-chart-page/td-area-chart-page.component';
import {TDLineChartPageComponent}         from './components/td-line-chart-page/td-line-chart-page.component';
import {ListViewComponent} from "./components/list-view/list-view.component";
import {SessionDetailComponent}     from './components/session-detail/session-detail.component';
import {RecordsViewComponent} from "./components/records-view/records-view.component";
import {StatisticsViewComponent} from "./components/statistics-view/statistics-view.component";
import {CalendarViewComponent} from "./components/calendar-view/calendar-view.component";

const routes: RouterConfig = [
    {path: 'sessionList', component: ListViewComponent},
    {path: 'sessionDetail/:id',  component: SessionDetailComponent},
    {path: 'tdLineChart/:id',  component: TDLineChartPageComponent},
    {path: 'tdAreaChart/:id',  component: TDAreaChartPageComponent},
    {path: 'calendar',  component: CalendarViewComponent},
    {path: 'records',  component: RecordsViewComponent},
    {path: 'statistics',  component: StatisticsViewComponent}
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
