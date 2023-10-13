import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagecardComponent } from './pagecard.component';

describe('PagecardComponent', () => {
  let component: PagecardComponent;
  let fixture: ComponentFixture<PagecardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagecardComponent]
    });
    fixture = TestBed.createComponent(PagecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
