import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface';
import { CurrenUserInterface } from 'src/app/shared/types/currentUser.interface';

export interface AuthStateInterface {
  isSubmitting: boolean;
  currentUser: CurrenUserInterface | null;
  isLoggedIn: boolean | null;
  validationErrors: BackendErrorsInterface | null;
  successMessages: string | null;
}
