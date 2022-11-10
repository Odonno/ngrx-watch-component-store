import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxWatchComponentStoreComponent } from './ngrx-watch-component-store.component';

describe('NgrxWatchComponentStoreComponent', () => {
  let component: NgrxWatchComponentStoreComponent;
  let fixture: ComponentFixture<NgrxWatchComponentStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgrxWatchComponentStoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgrxWatchComponentStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
