/**
 * PostgREST API
 * standard public schema
 *
 * OpenAPI spec version: 7.0.0 (2b61a63)
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


export interface IdemModulosComentarios { 
    /**
     * Note: This is a Primary Key.<pk/>
     */
    idcomentario: number;
    /**
     * Note: This is a Foreign Key to `idem_rel_cursos_modulos.idmodulo`.<fk table='idem_rel_cursos_modulos' column='idmodulo'/>
     */
    idmodulo?: number;
    /**
     * Note: This is a Foreign Key to `idem_rel_cursos_modulos.idcurso`.<fk table='idem_rel_cursos_modulos' column='idcurso'/>
     */
    idcurso?: number;
    /**
     * Note: This is a Foreign Key to `idem_personas.dni`.<fk table='idem_personas' column='dni'/>
     */
    dni?: string;
    titulo?: string;
    comentario?: string;
    /**
     * Note: This is a Foreign Key to `idem_estados.ideestado`.<fk table='idem_estados' column='ideestado'/>
     */
    idestado?: number;
    fecharegistro?: string;
}
