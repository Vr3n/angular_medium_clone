import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { HttpClientModule } from '@angular/common/http';

import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './components/register/register.component';
import { EffectsModule } from '@ngrx/effects';
import { RegisterEffect } from './store/effects/register.effects';
import { AuthService } from './services/auth.service';
import { BackendErrorMessagesModule } from '../shared/modules/backendErrorMessages/backendErrorMessages.modules';
import { PersistanceService } from '../shared/services/persistance.service';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BackendErrorMessagesModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([RegisterEffect]),
  ],
  declarations: [RegisterComponent],
  providers: [AuthService, PersistanceService],
})
export class AuthModule {}
