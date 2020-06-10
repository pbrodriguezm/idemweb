import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { IdemAlumnosService } from './api/idemAlumnos.service';
import { IdemApartadosService } from './api/idemApartados.service';
import { IdemCargosService } from './api/idemCargos.service';
import { IdemCategoriasService } from './api/idemCategorias.service';
import { IdemCursosService } from './api/idemCursos.service';
import { IdemDocentesService } from './api/idemDocentes.service';
import { IdemEstadosService } from './api/idemEstados.service';
import { IdemMatriculasService } from './api/idemMatriculas.service';
import { IdemModulosService } from './api/idemModulos.service';
import { IdemModulosComentariosService } from './api/idemModulosComentarios.service';
import { IdemPagosService } from './api/idemPagos.service';
import { IdemPermisosService } from './api/idemPermisos.service';
import { IdemPersonasService } from './api/idemPersonas.service';
import { IdemRelCursosModulosService } from './api/idemRelCursosModulos.service';
import { IdemUsuariosService } from './api/idemUsuarios.service';
import { IntrospectionService } from './api/introspection.service';
import { ItemTipocursosService } from './api/itemTipocursos.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    IdemAlumnosService,
    IdemApartadosService,
    IdemCargosService,
    IdemCategoriasService,
    IdemCursosService,
    IdemDocentesService,
    IdemEstadosService,
    IdemMatriculasService,
    IdemModulosService,
    IdemModulosComentariosService,
    IdemPagosService,
    IdemPermisosService,
    IdemPersonasService,
    IdemRelCursosModulosService,
    IdemUsuariosService,
    IntrospectionService,
    ItemTipocursosService ]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
