import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchRezultScreenComponent } from './search-rezult-screen.component';

describe('SearchRezultScreenComponent', () => {
  let component: SearchRezultScreenComponent;
  let fixture: ComponentFixture<SearchRezultScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchRezultScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchRezultScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
