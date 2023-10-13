import { FormControl, ValidationErrors } from "@angular/forms";

export class FormValidators {

    // whitespace validation
    static notOnlyWhitespace(control: FormControl): ValidationErrors {

        // check if string only contains whitespaces
        if ((control.value != null) && (control.value.trim().length === 0)) {            
            return { 'notOnlyWhitespace': true }; // invalid, return error object            
        } else { 
            return null as any;   //valid
        }
    }

}
