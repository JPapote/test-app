import { Component, OnInit, ViewChild } from '@angular/core';
import { DATA } from '../data/data';
import { IgxGridComponent } from 'igniteui-angular';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @ViewChild('grid1', { read: IgxGridComponent, static: true })
  public grid1!: IgxGridComponent;

  public data: any[] = [];

  ngOnInit(): void {
    this.data = DATA;
  }

  public formatDate(val: any) {
    if (val !== 'Select All') {
      return new Intl.DateTimeFormat('en-US').format(val);
    } else {
      return val;
    }
  }
}
