import { Injectable } from '@angular/core';
import { ErrorsConstants } from '../constants/errors.constants';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() { }

  public getErrorMessage(error: DOMException): void {
    switch (error.name) {
      case ErrorsConstants.NOT_FOUND_ERROR_CAMERA.name:
        alert(ErrorsConstants.NOT_FOUND_ERROR_CAMERA.message);
        break;
      case ErrorsConstants.NOT_READABLE_ERROR_CAMERA.name:
        alert(ErrorsConstants.NOT_READABLE_ERROR_CAMERA.message);
        break;
      case ErrorsConstants.OVERCONSTRAINED_ERROR_CAMERA.name:
        alert(ErrorsConstants.OVERCONSTRAINED_ERROR_CAMERA.message);
        break;
      case ErrorsConstants.SECURITY_ERROR_CAMERA.name:
        alert(ErrorsConstants.SECURITY_ERROR_CAMERA.message);
        break;
      case ErrorsConstants.NOT_ALLOWED_ERROR_CAMERA.name:
        alert(ErrorsConstants.NOT_ALLOWED_ERROR_CAMERA.message);
        break;
      default:
        alert(ErrorsConstants.DEFAULT_ERROR_CAMERA.message);
        break;
    }
  }

}
