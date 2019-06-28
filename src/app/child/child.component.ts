import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { PeriodicElement } from '../app.component';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() data: PeriodicElement[];
  dataSource;

  actualPaginator: MatPaginator;
  @ViewChild(MatPaginator)
  set paginator(value: MatPaginator) {
    this.actualPaginator = value;
  }

  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  selection = new SelectionModel<PeriodicElement>(true, []);


  constructor() { }

  ngOnInit() {
    this.createTable();
    this.dataSource.paginator = this.actualPaginator;
  }


  createTable() {

    this.dataSource = new MatTableDataSource(this.data);
    this.dataSource.sort = this.sort;
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
}
