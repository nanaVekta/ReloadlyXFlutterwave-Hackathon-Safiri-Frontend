import { AbstractControl, ValidatorFn } from "@angular/forms";

export class PasswordValidator {
  static equalTo(field_name: string): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      let input = control.value;
      let isValid = control.root.value[field_name] == input;
      if(!isValid) {
        return { 'equalTo': {isValid}}
      }
      else{
        return null;
      }
    }
  }
}
