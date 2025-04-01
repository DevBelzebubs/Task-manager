import { Routes } from '@angular/router';
import { ComponenteMainComponent } from './componente-main/componente-main.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { NotfoundComponenteComponent } from './notfound-componente/notfound-componente.component';

export const routes: Routes = [
    {path: '' , component:ComponenteMainComponent}, //localhost :v
    {path:'enter-task', component:AddTaskComponent},
    {path:'**',component:NotfoundComponenteComponent} //Not found
];
