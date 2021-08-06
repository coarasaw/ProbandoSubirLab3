namespace general{
    export class Persona{
        private id:number;
        private nombre: string;
        private apellido: string;
        private edad: number;
        
        constructor(id:number,nombre:string,apellido:string,edad:number){
            this.id=id;
            this.nombre = nombre;
            this.apellido = apellido; 
            this.edad = edad;
        }

        public getId():number{
            return this.id;
        }

        public getNombre():string{
            return this.nombre;
        }

        public setNombre(nombre:string):void{
            this.nombre=nombre;
        }
        
        public getApellido():string{
            return this.apellido;
        }

        public setApellido(apellido:string):void{
            this.apellido=apellido;
        }

        public getEdad():number{
            return this.edad;
        }

        public setEdad(edad:number):void{
            this.edad=edad;
        }

        public getPersonaToJson():string{
            return "{"+"id:"+this.getId + ",nombre:"+this.getNombre() + ",apellido:"+this.getApellido() + ",edad:"+this.getEdad()+"}";
        }
    }
}