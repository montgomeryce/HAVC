import { provideRouter, RouterConfig }  from '@angular/router';
import {ListViewComponent} from "./components/list-view/list-view.component";
import {SessionDetailComponent}     from './components/session-detail/session-detail.component';

const routes: RouterConfig = [
    {path: 'sessionList', component: ListViewComponent},
    {path: 'sessionDetail/:id',  component: SessionDetailComponent}
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
