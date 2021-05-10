import { Component, OnInit } from '@angular/core';
import { DeviceExecutableFiles } from './../shared/models/device-executable-files.model';
@Component({
  selector: 'app-executable-files-table',
  templateUrl: './executable-files-table.component.html',
  styleUrls: ['./executable-files-table.component.scss']
})
export class ExecutableFilesTableComponent implements OnInit {
  public tableData: DeviceExecutableFiles[] = [
    { name: 'smss.exe', device: 'Stark', path: '\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe', status: 'scheduled' },
    { name: 'netsh.exe', device: 'Targaryen', path: '\\Device\\HarddiskVolume2\\Windows\\System32\\netsh.exe', status: 'available' },
    { name: 'uxtheme.dll', device: 'Lanniester', path: '\\Device\\HarddiskVolume1\\Windows\\System32\\uxtheme.dll', status: 'available' },
    { name: 'cryptbase.dll', device: 'Martell', path: '\\Device\\HarddiskVolume1\\Windows\\System32\\cryptbase.dll', status: 'scheduled' },
    { name: '7za.exe', device: 'Baratheon', path: '\\Device\\HarddiskVolume1\\temp\\7za.exe', status: 'scheduled' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
