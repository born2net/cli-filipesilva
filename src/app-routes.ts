import {PreloadAllModules, RouterModule, Routes} from "@angular/router";

const routes: Routes = [
    {path: '**', redirectTo: 'AppComponent'}
];

export const routing = RouterModule.forRoot(routes, {enableTracing: false, preloadingStrategy: PreloadAllModules});


