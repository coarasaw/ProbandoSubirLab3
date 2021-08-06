/// <reference path="persona.ts" />
namespace general{
    //export enum eSexo{femenino='Femenino',masculino='Masculino'};

    export class Empleado extends general.Persona{
        private legajo:number;
        private horario:string;
        
        constructor(id:number,nombre:string,apellido:string,edad:number,legajo:number,horario:string){
            super(id,nombre,apellido,edad);
            this.legajo=legajo;
            this.horario=horario;
        }

        public getLegajo(){
            return this.legajo;
        }

        public setLegajo(){
            this.legajo = this.legajo;
        }
        
        public getHorario(){
            return this.horario;
        }

        public setHorario(){
            this.horario = this.horario;
        }

        public empleadoToJson():string{
            return "{"+this.getPersonaToJson()+",legajo:"+this.getLegajo()+",horario:"+this.getHorario()+"}";
        }

    }    
}