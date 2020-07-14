import { Directive, forwardRef, Attribute } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
    selector: '[ngxValidateEqual][formControlName],[ngxValidateEqual][formControl],[ngxValidateEqual][ngModel]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: forwardRef(() => EqualValidator), multi: true },
    ],
})
export class EqualValidator implements Validator {

    constructor(@Attribute('ngxValidateEqual') public validateEqual: string) {}

    validate(c: AbstractControl): { [key: string]: any } {
        const v = c.value;
        const e = c.root.get(this.validateEqual);

        if (e && v !== e.value && v) {
            return { equal: false };
        }
        return null;
    }
}
