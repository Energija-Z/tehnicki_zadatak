import { Routes } from '@angular/router';
import { TablicaComponent } from './tablica/tablica.component';

import { NgModule } from '@angular/core';
import { MainComponent } from './main/main.component';


NgModule({
    imports: [
        TablicaComponent,
    ],
})

export const routes: Routes = [
    {path: '', component: MainComponent},
    {path: 'tablica', component: TablicaComponent, pathMatch: 'full'}
];