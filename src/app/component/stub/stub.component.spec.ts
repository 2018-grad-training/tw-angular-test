import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StubComponent } from './stub.component';
import { UserService } from './user.service';

describe('StubComponent', () => {
  let component: StubComponent;
  let fixture: ComponentFixture<StubComponent>;
  let userService: UserService;

  beforeEach(async(() => {
    const userServiceStub = {
      isLoggedIn: () => true,
      userName: 'fake-name'
    };
    TestBed.configureTestingModule({
      declarations: [ StubComponent ],
      providers: [ {provide: UserService, useValue: userServiceStub } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StubComponent);
    component = fixture.componentInstance;
    userService = fixture.debugElement.injector.get(UserService);
  });

  it('should show username when user is logged in', () => {
    fixture.detectChanges();
    expect(component.welcome).toBe('Welcome, fake-name');
  });

  it('should show log in when user is not logged in', () => {
    userService.isLoggedIn = () => false;
    fixture.detectChanges();
    expect(component.welcome).toBe('Please log in.');
  });
});
