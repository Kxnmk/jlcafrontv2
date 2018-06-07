import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { UsuariosTableDataSource } from './usuarios-table-datasource';
import { UsuarioServiceService } from './../../../../shared/services/usuario-service.service';
// Toast
import { ToastrService } from 'ngx-toastr';

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
  displayedColumns = ['id', 'nombre', 'usuario', 'rol', 'acciones'];
  constructor(private _Uservice: UsuarioServiceService, private toastr: ToastrService) {}

  ngOnInit() {
    this._Uservice.getUsuarios().subscribe(
      data => {
        if (data.length !== 0) {
          this.dataSource = new UsuariosTableDataSource(this.paginator, this.sort, data);
          console.log(data);
        } else {
          this.toastr.error('Usuario o contraseña no valida intente de nuevo');
          console.log('Usuario o contraseña no valida');
        }
      },
      err => {
        console.log(err);
        this.toastr.error('Error en el servidor');
        console.log('Error en el servidor');
      });
  }
}
