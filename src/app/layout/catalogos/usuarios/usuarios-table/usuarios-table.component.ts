import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource,  } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UsuariosTableDataSource } from './usuarios-table-datasource';
import { MatTableModule } from '@angular/material/table';


@Component({
  selector: 'usuarios-table',
  templateUrl: './usuarios-table.component.html',
  styleUrls: ['./usuarios-table.component.css']
})
export class UsuariosTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: UsuariosTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'Nombre', 'Usuario', 'Rol', 'Movimientos'];
  constructor() {
  }

  ngOnInit() {
    this.dataSource = new UsuariosTableDataSource(this.paginator, this.sort);
  }
}
