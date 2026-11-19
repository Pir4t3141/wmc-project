import { Routes } from '@angular/router';
import { Example } from './example/example';
import { App } from './app';
import { Login } from './login/login';

export const routes: Routes = [
    {path: 'example', component: Example},
    {path: 'login', component: Login},
];
