import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultScreenComponent } from './search-rezult-screen.component';

describe('SearchRezultScreenComponent', () => {
  let component: SearchResultScreenComponent;
  let fixture: ComponentFixture<SearchResultScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchResultScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
