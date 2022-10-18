import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface';
import { AuthStateInterface } from '../types/authState.interface';

export const authFeatureSelector =
  createFeatureSelector<AuthStateInterface>('auth');

// Get the is submitting property.
export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface): boolean => authState.isSubmitting
);

export const validationErrorsSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface): BackendErrorsInterface | null =>
    authState.validationErrors
);
