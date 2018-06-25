import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';


const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'inicio' },
            { path: 'inicio', loadChildren: './inicio/inicio.module#InicioModule' },
            { path: 'audiencias', loadChildren: './audiencias/audiencias.module#AudienciasModule' },
            { path: 'comisiones', loadChildren: './comisiones/comisiones.module#ComisionesModule' },
            { path: 'demandas', loadChildren: './demandas/demandas.module#DemandasModule' },
            { path: 'documentos', loadChildren: './documentos/documentos.module#DocumentosModule' },
            { path: 'actores', loadChildren: './catalogos/actores/actores.module#ActoresModule' },
            { path: 'demandados', loadChildren: './catalogos/demandados/demandados.module#DemandadosModule' },
            { path: 'mesas', loadChildren: './catalogos/mesas/mesas.module#MesasModule' },
            { path: 'usuarios', loadChildren: './catalogos/usuarios/usuarios.module#UsuariosModule' },
            { path: 'mUsuario/:id', loadChildren: './catalogos/usuarios/musuario/mUsuario.module#MusuarioModule'},


            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
