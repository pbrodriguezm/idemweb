/**
 * PostgREST API
 * standard public schema
 *
 * OpenAPI spec version: 7.0.1 (UNKNOWN)
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


export interface IdemCursoPrese { 
    /**
     * Note: This is a Primary Key.<pk/>
     */
    idcursopre: number;
    /**
     * Note: This is a Foreign Key to `idem_cursos.idcurso`.<fk table='idem_cursos' column='idcurso'/>
     */
    idcurso?: number;
    programa?: string;
    fecha?: string;
    descripcion?: string;
    afiche?: string;
}