import { provideRouter, RouterConfig }  from '@angular/router';
import {TDLineChartPageComponent}         from './components/td-line-chart-page/td-line-chart-page.component';
import {ListViewComponent} from "./components/list-view/list-view.component";
import {SessionDetailComponent}     from './components/session-detail/session-detail.component';

const routes: RouterConfig = [
    {path: 'sessionList', component: ListViewComponent},
    {path: 'sessionDetail/:id',  component: SessionDetailComponent},
    {path: 'tdLineChart/:id',  component: TDLineChartPageComponent}
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
