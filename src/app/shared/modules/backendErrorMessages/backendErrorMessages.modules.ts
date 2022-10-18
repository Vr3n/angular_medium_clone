import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { backendErrorMessagesComponent } from './components/backendErrorMessages.components';

@NgModule({
  imports: [CommonModule],
  declarations: [backendErrorMessagesComponent],
  exports: [backendErrorMessagesComponent],
})
export class BackendErrorMessagesModule {}
