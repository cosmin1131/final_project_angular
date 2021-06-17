import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategoryPreviewComponent } from './subcategory-preview.component';

describe('SubcategoryPreviewComponent', () => {
  let component: SubcategoryPreviewComponent;
  let fixture: ComponentFixture<SubcategoryPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubcategoryPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcategoryPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
