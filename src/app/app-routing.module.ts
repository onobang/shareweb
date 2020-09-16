import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { BeritaComponent } from './berita/berita.component';
import {VidioComponent} from './vidio/vidio.component';
import {SaranComponent} from './saran/saran.component';
import {TentangkamiComponent} from './tentangkami/tentangkami.component';
import {DashboardComponent} from './auth/dashboard/dashboard.component';
import {SignInComponent} from './auth/sign-in/sign-in.component';
import {SignUpComponent} from './auth/sign-up/sign-up.component';
import {ForgotPasswordComponent} from './auth/forgot-password/forgot-password.component';
import {VeifyEmailComponent} from './auth/verify-email/veify-email.component';
import { AuthGuard } from './auth/shared/auth.guard';
import {ProfileComponent} from './auth/profile/profile.component';
import {AddKamusComponent} from './admin/add-kamus/add-kamus.component';
import {PesanComponent} from './auth/pesan/pesan.component';
import {AddKosakataComponent} from './admin/add-kosakata/add-kosakata.component';
import {KosakataListComponent} from './admin/kosakata-list/kosakata-list.component';

const routes: Routes = [
  { path: '', component: HomepageComponent},
  { path: 'berita', component: BeritaComponent },
  { path: 'vidio', component: VidioComponent},
  { path: 'saran', component: SaranComponent },
  { path: 'tentang-kami', component: TentangkamiComponent },
  { path: 'dashboard', component: DashboardComponent , canActivate: [AuthGuard] },
  { path: 'dashboard', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: SignInComponent },
  { path: 'logup', component: SignUpComponent },
  { path: 'forgot', component: ForgotPasswordComponent },
  { path: 'verify', component: VeifyEmailComponent },
  { path: 'profile/:id', component: ProfileComponent },
  { path: 'add-kamus/:id', component: AddKamusComponent},
  { path: 'pesan/:id', component: PesanComponent},
  { path: 'manage-kosakata/:id', component: KosakataListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
