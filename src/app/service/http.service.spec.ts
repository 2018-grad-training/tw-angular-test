import { TestBed, inject } from '@angular/core/testing';

import { HttpService } from './http.service';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

describe('HttpService', () => {
  let service: HttpService;
  const httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpService,
        {provide: HttpClient, useValue: httpClientSpy}
      ]
    });
    service = TestBed.get(HttpService);
  });

  it('should get value by http', () => {
    httpClientSpy.get.and.returnValue(of('expect-value'));

    service.getValue().subscribe((value => {
      expect(value).toBe('expect-value');
    }));
  });
});
