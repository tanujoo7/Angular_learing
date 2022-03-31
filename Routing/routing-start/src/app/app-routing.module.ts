import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AuthGuard } from './auth-guard.service'
import { ErrorPageComponent } from './error-page/error-page.component'
import { HomeComponent } from './home/home.component'
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component'
import { EditServerComponent } from './servers/edit-server/edit-server.component'
import { ServerComponent } from './servers/server/server.component'
import { ServersComponent } from './servers/servers.component'
import { UserComponent } from './users/user/user.component'
import { UsersComponent } from './users/users.component'

const holdRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'users',
    component: UsersComponent,
    children: [{ path: ':id/:name', component: UserComponent }],
  },
  {
    path: 'servers',
    canActivateChild: [AuthGuard],
    component: ServersComponent,
    children: [
      { path: ':id', component: ServerComponent },
      { path: ':id/edit', component: EditServerComponent },
    ],
  },
  {
    path: 'not-found',
    component: ErrorPageComponent,
    data: { message: 'Page not$$# found!!!!' },
  },
  { path: '**', component: PagenotfoundComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(holdRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
