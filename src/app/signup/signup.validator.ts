import { AbstractControl, ValidationErrors } from '@angular/forms';

export class SignupValidators {

    static canNotCantainSpace(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf('') >= 0 ) {
         return {
            canNotCantainSpace : true
         };
        }

        return null;
    }
}
