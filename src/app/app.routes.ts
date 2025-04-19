import { Routes } from '@angular/router';
import { ComponenteMainComponent } from './componente-main/componente-main.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { NotfoundComponenteComponent } from './notfound-componente/notfound-componente.component';
import { EditTaskComponent } from './edit-task/edit-task.component';

export const routes: Routes = [
    {path: '' , component:ComponenteMainComponent}, //localhost :v
    {path:'enter-task', component:AddTaskComponent},
    {path:'tasks/edit/:id', component:EditTaskComponent}, //localhost/enter-task/1
    {path:'**',component:NotfoundComponenteComponent} //Not found
];
