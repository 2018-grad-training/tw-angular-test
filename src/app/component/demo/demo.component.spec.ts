import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoComponent } from './demo.component';

describe('DemoComponent', () => {
  let component: DemoComponent;
  let fixture: ComponentFixture<DemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should value change when click button', () => {
    const demoElement: HTMLElement = fixture.nativeElement;
    const p = demoElement.querySelector('p');
    const button = demoElement.querySelector('button');

    button.click();
    fixture.detectChanges();

    expect(p.textContent).toBe('new value');
  });

  it('should value change when onClick be called', () => {
    component.onClick();
    expect(component.value).toBe('new value');
  });
});
