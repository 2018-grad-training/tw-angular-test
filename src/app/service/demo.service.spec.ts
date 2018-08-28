import { TestBed, inject } from '@angular/core/testing';

import { DemoService } from './demo.service';
import { ValueService } from './value.service';

describe('DemoService', () => {
  let service: DemoService;
  const valueServiceStub = jasmine.createSpyObj('ValueService', ['getValue']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DemoService,
        { provide: ValueService, useValue: valueServiceStub }
      ]
    });
    service = TestBed.get(DemoService);
  });

  it('should get value', () => {
    valueServiceStub.getValue.and.returnValue('stub-value');
    expect(service.getValue()).toBe('stub-value');
  });
});
