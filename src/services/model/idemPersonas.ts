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


export interface IdemPersonas { 
    /**
     * Note: This is a Primary Key.<pk/>
     */
    dni: string;
    nombres?: string;
    apellidoPa?: string;
    apellidoMa?: string;
    foto?: string;
    fechaNacimiento?: string;
    fecharegistro?: string;
    estado?: number;
}
