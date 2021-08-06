namespace general{
    export class Manejadora{
        private miEmpleado: Empleado;
        public filaModificar: any;

        public agregarEmpleado(){
            //var campoID = <HTMLInputElement>document.getElementById("Id");
            var campo0 = <HTMLInputElement>document.getElementById("campo0");
            var campo1 = <HTMLInputElement>document.getElementById("campo1");
            var campo2 = <HTMLInputElement>document.getElementById("campo2");
            var campo3 = <HTMLInputElement>document.getElementById("campo3");
            var campo4 = <HTMLInputElement>document.getElementById("campo4");

            //var atributoID:number = parseInt(campoID.value);
            var atributo0:number = parseInt(campo0.value);
            var atributo1:string = campo1.value;
            var atributo2:string = campo2.value;
            var atributo3:number = parseInt(campo3.value);
            var atributo4:string = campo4.value;
        
            /* if (atributo4 === eSexo.femenino) {
                var tipo:eSexo = general.eSexo.femenino;
            }else{
                var tipo:eSexo  = general.eSexo.masculino;
            } */
        
            //Vemos si calcula ID
            var idCalculado = general.calcularaID();
            
            console.log(idCalculado,atributo1,atributo2,atributo3,atributo0,atributo4);
            var miPersona:Persona = new Persona(idCalculado,atributo1,atributo2,atributo3);
            listaPersonas.push(miPersona);
            var miIten:Empleado = new Empleado(idCalculado,atributo1,atributo2,atributo3,atributo0,atributo4);
            listaEmpleado.push(miIten);
            this.miEmpleado = miIten;
        }
        
        public modificarEmpleado(){
            var campoID = <HTMLInputElement>document.getElementById("Id");
            var campo0 = <HTMLInputElement>document.getElementById("campo0");
            var campo1 = <HTMLInputElement>document.getElementById("campo1");
            var campo2 = <HTMLInputElement>document.getElementById("campo2");
            var campo3 = <HTMLInputElement>document.getElementById("campo3");
            var campo4 = <HTMLInputElement>document.getElementById("campo4");

            var atributoID:number = parseInt(campoID.value);
            var atributo0:number = parseInt(campo0.value);
            var atributo1:string = campo1.value;
            var atributo2:string = campo2.value;
            var atributo3:number = parseInt(campo3.value);
            var atributo4:string = campo4.value;
        
            /* if (atributo4 === eSexo.femenino) {
                var tipo:eSexo = general.eSexo.femenino;
            }else{
                var tipo:eSexo  = general.eSexo.masculino;
            } */

            var contador:number = 0;
            var indiceElementoGuardar:number = 0;
            
            listaEmpleado.forEach(elemento => {
                contador ++;
                if (elemento.getId() == atributoID) {
                    indiceElementoGuardar = contador;
                    console.log("Borrar " + indiceElementoGuardar);          
                }
                console.log("Contador " + contador);
                console.log(elemento);
            }); 
            
            //console.log(atributoID,atributo1,atributo2,atributo3,atributo0,atributo4);
            var miIten:Empleado = new Empleado(atributoID,atributo1,atributo2,atributo3,atributo0,atributo4);
            listaEmpleado.splice(indiceElementoGuardar-1,1,miIten);
            //listaPersonas.push(miIten);
            //listaEmpleado.push(miIten);
            this.miEmpleado = miIten;
            
            contador = 0;
            indiceElementoGuardar = 0;

            listaPersonas.forEach(elemento => {
                contador ++;
                if (elemento.getId() == atributoID) {
                    indiceElementoGuardar = contador;
                    console.log("Borrar " + indiceElementoGuardar);          
                }
                console.log("Contador " + contador);
                console.log(elemento);
            }); 

            var miPersona:Persona = new Persona(atributoID,atributo1,atributo2,atributo3);
            listaPersonas.splice(indiceElementoGuardar-1,1,miPersona);
        }

        public mostrarEmpleados(){
            general.agregarUnElemento1Grilla(this.miEmpleado,"cuerpo");
        }

        public mostrarEmpleadosModificado(){

            this.filaModificar.remove();

            var niItem = this.miEmpleado;
            var tbody = document.getElementById("cuerpo");
            //Creo la fila
            var tr = document.createElement("tr");
            //Creamos las colunmnas
            var td0 = document.createElement("td");
            td0.setAttribute("name","idTabla");
            var nodotext0 = document.createTextNode(niItem.getId().toString());
            td0.appendChild(nodotext0);
            tr.appendChild(td0);

            var td00 = document.createElement("td");
            td00.setAttribute("name","campo0Tabla");
            var nodotext00 = document.createTextNode(niItem.getLegajo().toString());
            td00.appendChild(nodotext00);
            tr.appendChild(td00);

            var td1 = document.createElement("td");
            td1.setAttribute("name","campo1Tabla");
            var nodotext1 = document.createTextNode(niItem.getNombre());
            td1.appendChild(nodotext1);
            tr.appendChild(td1);

            var td2 = document.createElement("td");
            td2.setAttribute("name","campo2Tabla");
            var nodotext2 = document.createTextNode(niItem.getApellido()); 
            td2.appendChild(nodotext2);
            tr.appendChild(td2);

            var td3 = document.createElement("td");
            td3.setAttribute("name","campo3Tabla");
            var nodotext3 = document.createTextNode(niItem.getEdad().toString());
            td3.appendChild(nodotext3);
            tr.appendChild(td3);

            var td4 = document.createElement("td");
            td4.setAttribute("name","campo4Tabla");
            var nodotext4 = document.createTextNode(niItem.getHorario().toString());
            td4.appendChild(nodotext4);
            tr.appendChild(td4);
            
            var td5 = document.createElement("td");
            td5.setAttribute("name","accion");
            var nodotext5 = document.createTextNode("Eliminar");
            var nodoBotonE = document.createElement("button");
            nodoBotonE.setAttribute("class","cerrar");
            nodoBotonE.setAttribute("name","botonEliminar");
            nodoBotonE.appendChild(nodotext5);
            td5.appendChild(nodoBotonE);
            tr.appendChild(td5);
            nodoBotonE.addEventListener("click",general.miManejadora.eliminarEmpleado);
            //
            var td6 = document.createElement("td");
            td6.setAttribute("name","accion");
            var nodotext6 = document.createTextNode("Modificar");
            var nodoBotonM = document.createElement("button");
            nodoBotonM.setAttribute("class","btnVerde");
            nodoBotonM.setAttribute("name","botonModificar");
            nodoBotonM.appendChild(nodotext6);
            td6.appendChild(nodoBotonM);
            tr.appendChild(td6);
            nodoBotonM.addEventListener("click",general.clickModifica);
            
            tbody.appendChild(tr); 
            }

            eliminarEmpleado(event){
                var tdAccion = event.target.parentNode;
                var trClick = tdAccion.parentNode;
                trClick.remove();
            }

            calcularPromedio()
            {
                return new Promise(function(resolve,reject){
                    var totalCalculado:number = listaEmpleado.reduce(function(total,num){
                        return total += num.getEdad()},0);
                      resolve(totalCalculado/listaEmpleado.length);
                    });
            }    
        /* public empleadoToJson():string{
            return "{"+this.getPersonaToJson()+",legajo:"+this.getLegajo()+",horario:"+this.getHorario()+"}";
        } */
    }    
}