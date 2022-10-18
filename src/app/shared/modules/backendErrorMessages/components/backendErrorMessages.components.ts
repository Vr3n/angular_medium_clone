import { Component, Input, OnInit } from '@angular/core';
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface';

@Component({
  selector: 'mc-backend-error-messages',
  templateUrl: './backendErrorMessages.component.html',
})
export class backendErrorMessagesComponent implements OnInit {
  @Input('backendErrors') backendErrorsProps!: BackendErrorsInterface | null;

  ngOnInit(): void {}
  //   if (this.backendErrorsProps !== null) {
  //     this.errorMessages = Object.keys(this.backendErrorsProps).map(
  //       (name: string) => {
  //         const messages = this.backendErrorsProps[name].join(' ');
  //         return `${name} ${messages}`;
  //       }
  //     );
  //   }
}
