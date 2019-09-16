import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

import {UsersComponent} from './users/users.component';
import {AuthorizationComponent} from './authorization/authorization.component';
import {AdminComponent} from './admin/admin.component';



const appRoutes: Routes = [
    {path: '',  redirectTo: 'users',  pathMatch: 'full'},
    {path: 'users', component: UsersComponent},
    {path: 'authorization', component: AuthorizationComponent},
    {path: 'admin', component: AdminComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules}) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {

}