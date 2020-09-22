import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabbarCompComponent } from './tabbar-comp.component';

describe('TabbarCompComponent', () => {
  let component: TabbarCompComponent;
  let fixture: ComponentFixture<TabbarCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabbarCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabbarCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
