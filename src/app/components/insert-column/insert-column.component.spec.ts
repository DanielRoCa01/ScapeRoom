import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertColumnComponent } from './insert-column.component';

describe('InsertColumnComponent', () => {
  let component: InsertColumnComponent;
  let fixture: ComponentFixture<InsertColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsertColumnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
