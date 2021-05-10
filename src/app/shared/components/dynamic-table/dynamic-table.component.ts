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

  selectAll(ev: Event): void {
    this.data.forEach((item: DeviceExecutableFiles) => {
      if (item.status === 'available') {
        item.state = (<HTMLInputElement>ev.target).checked;
      }
    });
  }

  download(): void {
    const selected = this.data.filter((x) => x.state);
    alert(JSON.stringify(selected));
  }

  get itemsSelected(): number {
    return this.data.filter((x) => x.state).length;
  }
}
