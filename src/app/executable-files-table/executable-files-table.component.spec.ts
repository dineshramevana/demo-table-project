import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutableFilesTableComponent } from './executable-files-table.component';

describe('ExecutableFilesTableComponent', () => {
  let component: ExecutableFilesTableComponent;
  let fixture: ComponentFixture<ExecutableFilesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExecutableFilesTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecutableFilesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
