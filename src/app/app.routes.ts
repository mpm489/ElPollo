import { Routes } from '@angular/router';
import { CanvasComponent } from './canvas/canvas.component';
import { StartScreenComponent } from './start-screen/start-screen.component';

export const routes: Routes = [
    { path: '', component: StartScreenComponent},
    { path: 'canvas', component: CanvasComponent},

];
