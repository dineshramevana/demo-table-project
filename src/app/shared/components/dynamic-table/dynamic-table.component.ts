import { Component, OnInit, Input } from '@angular/core';
import { DeviceExecutableFiles } from '../../models/device-executable-files.model';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss']
})
export class DynamicTableComponent implements OnInit {
  @Input() data: DeviceExecutableFiles[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  selectAll(ev: Event) {
    this.data.forEach((item: DeviceExecutableFiles) => item.state = (<HTMLInputElement>ev.target).checked);
  }

  isAllSelected() {
    return this.data.every((item: DeviceExecutableFiles) => item.state as boolean);
  }

  get itemsSelected(): number {
    return this.data.filter((x) => x.state).length;
  }
}
