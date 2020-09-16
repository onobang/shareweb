import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './footer/footer.component';
import { BeritaComponent } from './berita/berita.component';
import { KamusComponent } from './kamus/kamus.component';
import { VidioComponent } from './vidio/vidio.component';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import { SaranComponent } from './saran/saran.component';
import { TentangkamiComponent } from './tentangkami/tentangkami.component';
import { DashboardComponent } from './auth/dashboard/dashboard.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { VeifyEmailComponent } from './auth/verify-email/veify-email.component';
import { AuthService } from './auth/shared/services/auth.service';
import { DataTablesModule } from 'angular-datatables';
import { Alarm,
  AlarmFill,
  PersonCircle,
  Power,
  PersonLinesFill,
  Lock,
  Person,
  Envelope,
  FileEarmarkPlusFill
} from 'ngx-bootstrap-icons';
import { ProfileComponent } from './auth/profile/profile.component';
import { SidebarComponent } from './auth/sidebar/sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AddKamusComponent } from './admin/add-kamus/add-kamus.component';
import { PesanComponent } from './auth/pesan/pesan.component';
import { AddKosakataComponent } from './admin/add-kosakata/add-kosakata.component';
import { KosakataDetailsComponent } from './admin/kosakata-details/kosakata-details.component';
import { KosakataListComponent } from './admin/kosakata-list/kosakata-list.component';
import { NgxPaginationModule } from 'ngx-pagination';


const icons = {
  Alarm,
  AlarmFill,
  PersonCircle,
  Power,
  PersonLinesFill,
  Lock,
  Person,
  Envelope,
  FileEarmarkPlusFill
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    FooterComponent,
    BeritaComponent,
    KamusComponent,
    VidioComponent,
    SaranComponent,
    TentangkamiComponent,
    DashboardComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VeifyEmailComponent,
    ProfileComponent,
    SidebarComponent,
    AddKamusComponent,
    PesanComponent,
    AddKosakataComponent,
    KosakataDetailsComponent,
    KosakataListComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgxBootstrapIconsModule.pick(icons),
    BrowserAnimationsModule,
    MatChipsModule,
    MatIconModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FontAwesomeModule,
    FormsModule,
    DataTablesModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
