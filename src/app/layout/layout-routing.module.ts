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
            { path: 'actores', loadChildren: './catalogos/actores/actores.module#ActoresModule' },
            { path: 'demandados', loadChildren: './catalogos/demandados/demandados.module#DemandadosModule' },
            { path: 'mesas', loadChildren: './catalogos/mesas/mesas.module#MesasModule' },
            { path: 'usuarios', loadChildren: './catalogos/usuarios/usuarios.module#UsuariosModule' },
            { path: 'mUsuario/:id', loadChildren: './catalogos/usuarios/musuario/mUsuario.module#MusuarioModule'},
            { path: 'mUsuario', loadChildren: './catalogos/usuarios/musuario/mUsuario.module#MusuarioModule' },
            { path: 'mActor/:id', loadChildren: './catalogos/actores/mActor/mActor.module#MActorModule' },
            { path: 'mActor', loadChildren: './catalogos/actores/mActor/mActor.module#MActorModule' },
            { path: 'mDemandado/:id', loadChildren: './catalogos/demandados/mDemandados/mDemandado.module#MDemandadoModule' },
            { path: 'mDemandado', loadChildren: './catalogos/demandados/mDemandados/mDemandado.module#MDemandadoModule' },
            { path: 'mMesa/:id', loadChildren: './catalogos/mesas/mMesa/mMesa.module#MMesaModule' },
            { path: 'mMesa', loadChildren: './catalogos/mesas/mMesa/mMesa.module#MMesaModule' },
            { path: 'permisos', loadChildren: './catalogos/permisos/permisos.module#PermisosModule' },
            { path: 'mPermiso/:id', loadChildren: './catalogos/permisos/mPermisos/mPermiso.module#MPermisoModule' },
            { path: 'mDemanda/:id', loadChildren: './demandas/mDemanda/mDemanda.module#MDemandaModule' },
            { path: 'mDemanda', loadChildren: './demandas/mDemanda/mDemanda.module#MDemandaModule' },

            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'documentos/:id', loadChildren: './demandas/documentos/documentos.module#DocumentosModule' },
            { path: 'mDoc/:id', loadChildren: './demandas/documentos/mDoc/mDoc.module#MDocModule' },
            { path: 'mDoc', loadChildren: './demandas/documentos/mDoc/mDoc.module#MDocModule' },


        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
