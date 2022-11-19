import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDocsComponent } from './ng-docs.component';

describe('NgDocsComponent', () => {
  let component: NgDocsComponent;
  let fixture: ComponentFixture<NgDocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgDocsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
