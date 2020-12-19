import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopPhotoComponent } from './top-photo.component';

describe('TopPhotoComponent', () => {
  let component: TopPhotoComponent;
  let fixture: ComponentFixture<TopPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopPhotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
