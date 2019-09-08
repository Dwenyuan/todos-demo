import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'inbox',
    loadChildren: () =>
      import('./pages/inbox/inbox.module').then(m => m.InboxPageModule)
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () =>
      import('./pages/list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'projects',
    children: [
      {
        path: '',
        loadChildren: './pages/projects/projects.module#ProjectsPageModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
