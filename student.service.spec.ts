import { TestBed } from '@angular/core/testing';

import { StudentService } from './student.service';

describe('StudentService', () => {
  let service: StudentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentService);
  });

  xit('should be created', () => {
    expect(service).toBeTruthy();
  });
});
