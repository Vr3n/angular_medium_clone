import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface';

import {
  registerAction,
  registerSuccessAction,
} from '../../store/actions/register.action';
import {
  isSubmittingSelector,
  validationErrorsSelector,
} from '../../store/selectors';
import { RegisterRequestInterface } from '../../types/registerRequest.interface';

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;
  isSubmitting$!: Observable<boolean>;
  validationErorrs$!: Observable<BackendErrorsInterface | null>;

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.initializeRegisterForm();
    this.initializeRegisterState();
  }

  // Initialize Register form on page init.
  initializeRegisterForm(): void {
    this.form = this.fb.group({
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  // Initialize State Values on page init.
  initializeRegisterState(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));

    this.validationErorrs$ = this.store.pipe(select(validationErrorsSelector));
  }

  // On Form Submit Function
  registerFormSubmit(): void {
    const request: RegisterRequestInterface = {
      user: this.form.value,
    };

    this.store.dispatch(registerAction({ request }));
  }
}
