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

  selectAll(ev: any): void {
    this.data.forEach((item: DeviceExecutableFiles) => {
      if (item.status === 'available') {
        item.state = (<HTMLInputElement>ev.target).checked;
      }
    });
  }

  download(): void {
    const selected = this.data.filter((x) => x.state);
    window.alert(JSON.stringify(selected));
  }

  get isInderminateState(): boolean {
    const totalSelectionsPossible = this.data && this.data.filter(x => x.status === 'available').length;
    return this.itemsSelected > 0 && this.itemsSelected < totalSelectionsPossible;
  }

  get itemsSelected(): number {
    return this.data && this.data.filter((x) => x.state).length;
  }
}
