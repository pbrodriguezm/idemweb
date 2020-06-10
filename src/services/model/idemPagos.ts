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


export interface IdemPagos { 
    /**
     * Note: This is a Primary Key.<pk/>
     */
    idpago: number;
    /**
     * Note: This is a Foreign Key to `idem_matriculas.idmatricula`.<fk table='idem_matriculas' column='idmatricula'/>
     */
    idmatricula: number;
    /**
     * Note: This is a Foreign Key to `idem_cursos.idcurso`.<fk table='idem_cursos' column='idcurso'/>
     */
    idcurso: number;
    fechaProgramada: string;
    monto?: number;
    comentario?: string;
    idestado: number;
    fecharegistro?: string;
}
