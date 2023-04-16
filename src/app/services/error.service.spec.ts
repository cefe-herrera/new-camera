import { TestBed } from '@angular/core/testing';
import { ErrorService } from './error.service';
import { ErrorsConstants } from '../constants/errors.constants';

describe('ErrorService', () => {
  let service: ErrorService;
  let alertSpy: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorService);
    alertSpy = spyOn(window, 'alert');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should show NOT_FOUND_ERROR_CAMERA alert message', () => {
    const error = new DOMException('',  ErrorsConstants.NOT_FOUND_ERROR_CAMERA.name);
    service.getErrorMessage(error);
    expect(alertSpy).toHaveBeenCalledWith(ErrorsConstants.NOT_FOUND_ERROR_CAMERA.message);
  });

  it('should show NOT_READABLE_ERROR_CAMERA alert message', () => {
    const error = new DOMException('', ErrorsConstants.NOT_READABLE_ERROR_CAMERA.name);
    service.getErrorMessage(error);
    expect(alertSpy).toHaveBeenCalledWith(ErrorsConstants.NOT_READABLE_ERROR_CAMERA.message);
  });

  it('should show OVERCONSTRAINED_ERROR_CAMERA alert message', () => {
    const error = new DOMException('', ErrorsConstants.OVERCONSTRAINED_ERROR_CAMERA.name);
    service.getErrorMessage(error);
    expect(alertSpy).toHaveBeenCalledWith(ErrorsConstants.OVERCONSTRAINED_ERROR_CAMERA.message);
  });

  it('should show SECURITY_ERROR_CAMERA alert message', () => {
    const error = new DOMException('', ErrorsConstants.SECURITY_ERROR_CAMERA.name);
    service.getErrorMessage(error);
    expect(alertSpy).toHaveBeenCalledWith(ErrorsConstants.SECURITY_ERROR_CAMERA.message);
  });

  it('should show NOT_ALLOWED_ERROR_CAMERA alert message', () => {
    const error = new DOMException('', ErrorsConstants.NOT_ALLOWED_ERROR_CAMERA.name);
    service.getErrorMessage(error);
    expect(alertSpy).toHaveBeenCalledWith(ErrorsConstants.NOT_ALLOWED_ERROR_CAMERA.message);
  });

  it('should show DEFAULT_ERROR_CAMERA alert message', () => {
    const error = new DOMException('', ErrorsConstants.DEFAULT_ERROR_CAMERA.name);
    service.getErrorMessage(error);
    expect(alertSpy).toHaveBeenCalledWith(ErrorsConstants.DEFAULT_ERROR_CAMERA.message);
  });



});
