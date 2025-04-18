import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarDropdownComponent } from './toolbar-dropdown.component';

describe('ToolbarDropdownComponent', () => {
  let component: ToolbarDropdownComponent;
  let fixture: ComponentFixture<ToolbarDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolbarDropdownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolbarDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
