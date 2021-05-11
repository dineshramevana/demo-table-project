import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DynamicTableComponent } from './dynamic-table.component';
import { DeviceExecutableFiles } from '../../models/device-executable-files.model';

describe('DynamicTableComponent', () => {
  let component: DynamicTableComponent;
  let fixture: ComponentFixture<DynamicTableComponent>;

  let dataMock: DeviceExecutableFiles[] = [
    { name: 'smss.exe', device: 'Stark', path: '\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe', status: 'scheduled' },
    { name: 'netsh.exe', device: 'Targaryen', path: '\\Device\\HarddiskVolume2\\Windows\\System32\\netsh.exe', status: 'available' },
    { name: 'uxtheme.dll', device: 'Lanniester', path: '\\Device\\HarddiskVolume1\\Windows\\System32\\uxtheme.dll', status: 'available' },
    { name: 'cryptbase.dll', device: 'Martell', path: '\\Device\\HarddiskVolume1\\Windows\\System32\\cryptbase.dll', status: 'scheduled' },
    { name: '7za.exe', device: 'Baratheon', path: '\\Device\\HarddiskVolume1\\temp\\7za.exe', status: 'scheduled' }
  ];

  let eventMock = {
    target: {
      checked: true
    }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DynamicTableComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicTableComponent);
    component = fixture.componentInstance;
    component.data = dataMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should select all those which are available', () => {
    component.selectAll(eventMock);
    const availableItems = component.data.filter(item => item.status === 'available');
    const stateItems = component.data.filter(item => item.state);
    expect(availableItems.length).toBe(stateItems.length);
  });

  it('should show open alert when download is clicked', () => {
    const spy = spyOn(window, 'alert');
    component.download();
    const selected = component.data.filter(x => x.state);
    const selectedString = JSON.stringify(selected);
    expect(spy).toHaveBeenCalledWith(selectedString);
  });

  it('should set the intermediate state only when items are selected', () => {
    const isInderminateState = component.isInderminateState;
    expect(isInderminateState).toBe(false);
  });

});
