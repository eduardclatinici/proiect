import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routes} from './app.router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavMainComponent } from './components/nav-main/nav-main.component';
import { HeaderToolboxComponent } from './components/header-toolbox/header-toolbox.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { HomeComponent } from './components/home/home.component';

import { CarouselComponent } from './components/carousel/carousel.component';
import { PetHotelComponent } from './components/pet-hotel/pet-hotel.component';
import { ModalReservationComponent } from './components/modal-reservation/modal-reservation.component';
import { RangeDatePickerComponent } from './components/range-date-picker/range-date-picker.component';
import {NgbActiveModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { DaycareComponent } from './components/daycare/daycare.component';
import { ModalUserDataComponent } from './components/modal-user-data/modal-user-data.component';
import {AuthService} from './services/auth.service';
import {AuthInterceptor} from './services/interceptor.service';
import {JwtModule} from '@auth0/angular-jwt';
import {LocalStorageService} from './services/local-storage.service';
import { TasksComponent } from './components/tasks/tasks.component';
import {AdminGuard, EmployeeGuard, UserGuard} from './services/guard.service';
import {ReservationService} from './services/reservation.service';
import { ModalNotificationsComponent } from './components/modal-notifications/modal-notifications.component';
import {NotificationService} from './services/notification.service';
import { SafeHtml } from './services/safe-html.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavMainComponent,
    HeaderToolboxComponent,
    ForgotPasswordComponent,
    HomeComponent,
    CarouselComponent,
    PetHotelComponent,
    ModalReservationComponent,
    RangeDatePickerComponent,
    DaycareComponent,
    ModalUserDataComponent,
    TasksComponent,
    ModalNotificationsComponent,
    SafeHtml,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    routes,
    NgbModule.forRoot(),
    HttpClientModule,
    HttpModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {return LocalStorageService.getAuthorizationToken()},
        whitelistedDomains: ['http://localhost:9999']
      }
    }),
  ],
  providers: [CookieService, NgbActiveModal, AuthService, LocalStorageService,AdminGuard,UserGuard,EmployeeGuard, ReservationService, NotificationService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent],
  entryComponents: [ModalReservationComponent, ModalUserDataComponent, ModalNotificationsComponent]
})
export class AppModule { }
