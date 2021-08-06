/// <reference path="./persona.ts" />
/// <reference path="./empleado.ts" />
/// <reference path="./manejadora.ts" />
var general;
(function (general) {
    window.addEventListener("load", function () {
        //Formulario 1
        document.getElementById("btnGuardarFormulario1").addEventListener("click", general.guardarFormularioUno);
        document.getElementById("btnModificarFormulario1").addEventListener("click", general.modificaFormularioUno);
        document.getElementById("btnAbrirFormulario1").addEventListener("click", general.abrirFormularioUno);
        document.getElementById("btnCerrarFormulario1").addEventListener("click", general.cerrarFormularioUno);
        document.getElementById("limpiarFormulario1").addEventListener("click", general.limpiarFormularioUno);
        // Para calcular y buscar
        document.getElementById("btnPromedio").addEventListener("click", general.procesarPromedio);
        document.getElementById("btnPromedioSalir").addEventListener("click", general.limpiarPromedio);
        document.getElementById("btnSalirBusqueda").addEventListener("click", general.SalirBusqueda);
        document.getElementById("tecla").addEventListener("keypress", buscarEnAtributo);
        //Oculta campos
        document.getElementById("idCheck").addEventListener("change", camposMostrados);
        document.getElementById("campo0Check").addEventListener("change", camposMostrados);
        document.getElementById("campo1Check").addEventListener("change", camposMostrados);
        document.getElementById("campo2Check").addEventListener("change", camposMostrados);
        document.getElementById("campo3Check").addEventListener("change", camposMostrados);
        document.getElementById("campo4Check").addEventListener("change", camposMostrados);
    });
    general.listaPersonas = new Array();
    general.listaEmpleado = new Array();
    //var trClick: any;
    var textoBuscar = '';
    var bandera = false;
    general.miManejadora = new general.Manejadora();
    function buscarEnAtributo(letra) {
        var txtTecla = document.getElementById("tecla");
        textoBuscar = txtTecla.value + letra.key;
        console.log(textoBuscar);
        if (textoBuscar != "") {
            //console.log("If");
            var contenedorPrincipalTabla = document.getElementById("contenedorPrincipalTabla");
            contenedorPrincipalTabla.hidden = true;
            var TablaBusqueda = document.getElementById("ContenedorTablaBusqueda");
            TablaBusqueda.hidden = false;
            //Borramos Grilla 
            var tbody = document.getElementById("cuerpoBusqueda");
            var tablaBusqueda = document.getElementById("grillaBusqueda");
            if (tbody.hasChildNodes()) {
                tablaBusqueda.removeChild(tbody);
                var tbodyBusqueda = document.createElement("tbody");
                tbodyBusqueda.setAttribute("id", "cuerpoBusqueda");
                tablaBusqueda.appendChild(tbodyBusqueda);
            }
            buscarNombre(textoBuscar);
            buscarApellido(textoBuscar);
            buscarTurno(textoBuscar);
            //buscarNombreFromulario2(textoBuscar);
        }
    }
    general.buscarEnAtributo = buscarEnAtributo;
    function SalirBusqueda() {
        console.log("SalirBusqueda");
        var TablaBusqueda = document.getElementById("ContenedorTablaBusqueda");
        TablaBusqueda.hidden = true;
        var contenedorPrincipalTabla = document.getElementById("contenedorPrincipalTabla");
        contenedorPrincipalTabla.hidden = false;
        var elementoBusqueda = document.getElementById("tecla");
        elementoBusqueda.value = "";
    }
    general.SalirBusqueda = SalirBusqueda;
    function buscarNombre(textoBuscar) {
        //console.log("Entro a Fromulario 1");
        var listaResultadoFormulario1 = general.listaEmpleado.filter(function (objetoFormulario) {
            return objetoFormulario.getNombre() == textoBuscar;
        });
        armarGrillaFromulario1(listaResultadoFormulario1);
    }
    general.buscarNombre = buscarNombre;
    function buscarApellido(textoBuscar) {
        //console.log("Entro a Fromulario 1");
        var listaResultadoFormulario1 = general.listaEmpleado.filter(function (objetoFormulario) {
            return objetoFormulario.getApellido() == textoBuscar;
        });
        armarGrillaFromulario1(listaResultadoFormulario1);
    }
    general.buscarApellido = buscarApellido;
    function buscarTurno(textoBuscar) {
        var listaResultado = general.listaEmpleado.filter(function (objetoBuscado) {
            return objetoBuscado.getHorario() == textoBuscar;
        });
        armarGrillaFromulario1(listaResultado);
    }
    general.buscarTurno = buscarTurno;
    //Formulario 1
    function armarGrillaFromulario1(listaResultado) {
        //Cargamos Grilla
        listaResultado.forEach(function (niItem) {
            agregarUnElemento1Grilla(niItem, "cuerpoBusqueda");
        });
    }
    function agregarUnElemento1Grilla(niItem, nombreTabla) {
        var tbody = document.getElementById(nombreTabla);
        //Creo la fila
        var tr = document.createElement("tr");
        //Creamos las colunmnas
        var td0 = document.createElement("td");
        td0.setAttribute("name", "idTabla");
        var nodotext0 = document.createTextNode(niItem.getId());
        td0.appendChild(nodotext0);
        tr.appendChild(td0);
        var td00 = document.createElement("td");
        td00.setAttribute("name", "campo0Tabla");
        var nodotext00 = document.createTextNode(niItem.getLegajo());
        td00.appendChild(nodotext00);
        tr.appendChild(td00);
        var td1 = document.createElement("td");
        td1.setAttribute("name", "campo1Tabla");
        var nodotext1 = document.createTextNode(niItem.getNombre());
        td1.appendChild(nodotext1);
        tr.appendChild(td1);
        var td2 = document.createElement("td");
        td2.setAttribute("name", "campo2Tabla");
        var nodotext2 = document.createTextNode(niItem.getApellido());
        td2.appendChild(nodotext2);
        tr.appendChild(td2);
        var td3 = document.createElement("td");
        td3.setAttribute("name", "campo3Tabla");
        var nodotext3 = document.createTextNode(niItem.getEdad().toString());
        td3.appendChild(nodotext3);
        tr.appendChild(td3);
        var td4 = document.createElement("td");
        td4.setAttribute("name", "campo4Tabla");
        var nodotext4 = document.createTextNode(niItem.getHorario().toString());
        td4.appendChild(nodotext4);
        tr.appendChild(td4);
        var TablaContenedor = document.getElementById("TablaContenedor");
        if (TablaContenedor.hidden == true) {
            var td5 = document.createElement("td");
            td5.setAttribute("name", "accion");
            var nodotext5 = document.createTextNode("Eliminar");
            var nodoBotonE = document.createElement("button");
            nodoBotonE.setAttribute("class", "cerrar");
            nodoBotonE.setAttribute("name", "botonEliminar");
            nodoBotonE.appendChild(nodotext5);
            td5.appendChild(nodoBotonE);
            tr.appendChild(td5);
            nodoBotonE.addEventListener("click", general.miManejadora.eliminarEmpleado);
            //
            var td6 = document.createElement("td");
            td6.setAttribute("name", "accion");
            var nodotext6 = document.createTextNode("Modificar");
            var nodoBotonM = document.createElement("button");
            nodoBotonM.setAttribute("class", "btnVerde");
            nodoBotonM.setAttribute("name", "botonModificar");
            nodoBotonM.appendChild(nodotext6);
            td6.appendChild(nodoBotonM);
            tr.appendChild(td6);
            nodoBotonM.addEventListener("click", clickModifica);
        }
        tbody.appendChild(tr);
    }
    general.agregarUnElemento1Grilla = agregarUnElemento1Grilla;
    function abrirFormularioUno() {
        //Elementos Ocultados
        //Boton Abrir Formularios
        /* var btnAbrirFormulario2 = document.getElementById("btnAbrirFormulario2");
        btnAbrirFormulario2.hidden = true;  */
        var btnAbrirFormulario1 = document.getElementById("btnAbrirFormulario1");
        btnAbrirFormulario1.hidden = true;
        //Campo Buscar
        var btnTecla = document.getElementById("btnTecla");
        btnTecla.hidden = true;
        //Boton Salir Busqueda
        var btnSalirBusqueda = document.getElementById("btnSalirBusqueda");
        btnSalirBusqueda.hidden = true;
        //Promedio
        var promedio = document.getElementById("ocultaPromedioInput");
        promedio.hidden = true;
        var btnPromedio = document.getElementById("btnPromedio");
        btnPromedio.hidden = true;
        var btnPromedioSalir = document.getElementById("btnPromedioSalir");
        btnPromedioSalir.hidden = true;
        //Lista
        var TablaContenedor = document.getElementById("TablaContenedor");
        TablaContenedor.hidden = true;
        //Muestra 
        var contFormulario1 = document.getElementById("contFormulario1");
        contFormulario1.hidden = false;
        //bandera = true el Formulario es Modificar / Si es false Formulario es Alta
        //console.log(bandera);
        if (bandera) {
            console.log("Modifica");
            // Titulo Formulario Modificar 
            // Mostrar Boton Modificar
            // Ocultar Boton Guardar
            var btnGuardarFormulario1 = document.getElementById("btnGuardarFormulario1");
            btnGuardarFormulario1.hidden = true;
            var btnModificarFormulario1 = document.getElementById("btnModificarFormulario1");
            btnModificarFormulario1.hidden = false;
            var TituloFormulario1 = document.getElementById("TituloFormulario1");
            TituloFormulario1.innerHTML = "Modica Empleado";
            bandera = false;
        }
        else {
            console.log("Alta");
            // Titulo Formulario Alta
            // Mostrar Boton Guardar
            // Ocultar Boton Modificar
            var TituloFormulario1 = document.getElementById("TituloFormulario1");
            TituloFormulario1.innerHTML = "Alta Empleado";
            var btnGuardarFormulario1 = document.getElementById("btnGuardarFormulario1");
            btnGuardarFormulario1.hidden = false;
            var btnModificarFormulario1 = document.getElementById("btnModificarFormulario1");
            btnModificarFormulario1.hidden = true;
        }
    }
    general.abrirFormularioUno = abrirFormularioUno;
    function cerrarFormularioUno() {
        //Elementos Mostrados
        //Boton Abrir Formularios
        /* var btnAbrirFormulario2 = document.getElementById("btnAbrirFormulario2");
        btnAbrirFormulario2.hidden = false;  */
        var btnAbrirFormulario1 = document.getElementById("btnAbrirFormulario1");
        btnAbrirFormulario1.hidden = false;
        //Campo Buscar
        var btnTecla = document.getElementById("btnTecla");
        btnTecla.hidden = false;
        //Boton Salir Busqueda
        var btnSalirBusqueda = document.getElementById("btnSalirBusqueda");
        btnSalirBusqueda.hidden = false;
        //Promedio
        var promedio = document.getElementById("ocultaPromedioInput");
        promedio.hidden = false;
        var btnPromedio = document.getElementById("btnPromedio");
        btnPromedio.hidden = false;
        var btnPromedioSalir = document.getElementById("btnPromedioSalir");
        btnPromedioSalir.hidden = false;
        //Lista
        var TablaContenedor = document.getElementById("TablaContenedor");
        TablaContenedor.hidden = false;
        //Ocultar
        var contFormulario1 = document.getElementById("contFormulario1");
        contFormulario1.hidden = true;
        limpiarFormularioUno();
    }
    general.cerrarFormularioUno = cerrarFormularioUno;
    function limpiarFormularioUno() {
        var campo0 = document.getElementById("campo0");
        var campo1 = document.getElementById("campo1");
        var campo2 = document.getElementById("campo2");
        var campo3 = document.getElementById("campo3");
        //var campo4 = <HTMLInputElement>document.getElementById("campo4");
        campo0.value = "";
        campo1.value = "";
        campo2.value = "";
        campo3.value = "";
        //campo4.value = "";
    }
    general.limpiarFormularioUno = limpiarFormularioUno;
    function guardarFormularioUno() {
        general.miManejadora.agregarEmpleado();
        console.log(general.listaEmpleado);
        limpiarFormularioUno();
        general.miManejadora.mostrarEmpleados();
    }
    general.guardarFormularioUno = guardarFormularioUno;
    function modificaFormularioUno() {
        console.log("Armar Modificar");
        general.miManejadora.modificarEmpleado();
        //console.log (listaEmpleado);
        limpiarFormularioUno();
        general.miManejadora.mostrarEmpleadosModificado();
        cerrarFormularioUno();
    }
    general.modificaFormularioUno = modificaFormularioUno;
    //Formulario 2
    function calcularaID() {
        //El id se debe calcular buscando el id más alto de la lista y sumándole 1 (Utilizar reduce).
        var arrayID = general.listaPersonas.reduce(function (idMayor, num) {
            if (idMayor < num.getId()) {
                idMayor = num.getId();
            }
            return idMayor;
        }, 0);
        return arrayID + 1;
    }
    general.calcularaID = calcularaID;
    function camposMostrados() {
        var id = document.getElementById("idCheck");
        var campo0 = document.getElementById("campo0Check");
        var campo1 = document.getElementById("campo1Check");
        var campo2 = document.getElementById("campo2Check");
        var campo3 = document.getElementById("campo3Check");
        var campo4 = document.getElementById("campo4Check");
        if (id.checked) {
            var tablaId = document.getElementsByName("idTabla");
            tablaId.forEach(function (x) { x.hidden = false; });
        }
        else {
            var tablaId = document.getElementsByName("idTabla");
            tablaId.forEach(function (x) { x.hidden = true; });
        }
        ;
        if (campo0.checked) {
            var tablacampo0 = document.getElementsByName("campo0Tabla");
            tablacampo0.forEach(function (x) { x.hidden = false; });
        }
        else {
            var tablacampo0 = document.getElementsByName("campo0Tabla");
            tablacampo0.forEach(function (x) { x.hidden = true; });
        }
        ;
        if (campo1.checked) {
            var tablacampo1 = document.getElementsByName("campo1Tabla");
            tablacampo1.forEach(function (x) { x.hidden = false; });
        }
        else {
            var tablacampo1 = document.getElementsByName("campo1Tabla");
            tablacampo1.forEach(function (x) { x.hidden = true; });
        }
        ;
        if (campo2.checked) {
            var tablacampo2 = document.getElementsByName("campo2Tabla");
            tablacampo2.forEach(function (x) { x.hidden = false; });
        }
        else {
            var tablacampo2 = document.getElementsByName("campo2Tabla");
            tablacampo2.forEach(function (x) { x.hidden = true; });
        }
        ;
        if (campo3.checked) {
            var tablacampo3 = document.getElementsByName("campo3Tabla");
            tablacampo3.forEach(function (x) { x.hidden = false; });
        }
        else {
            var tablacampo3 = document.getElementsByName("campo3Tabla");
            tablacampo3.forEach(function (x) { x.hidden = true; });
        }
        ;
        if (campo4.checked) {
            var tablacampo4 = document.getElementsByName("campo4Tabla");
            tablacampo4.forEach(function (x) { x.hidden = false; });
        }
        else {
            var tablacampo4 = document.getElementsByName("campo4Tabla");
            tablacampo4.forEach(function (x) { x.hidden = true; });
        }
        ;
    }
    general.camposMostrados = camposMostrados;
    function clickModifica(event) {
        var tdAccion = event.target.parentNode;
        var trClick = tdAccion.parentNode;
        bandera = true;
        general.miManejadora.filaModificar = trClick;
        var campoID = document.getElementById("Id");
        var campo0 = document.getElementById("campo0");
        var campo1 = document.getElementById("campo1");
        var campo2 = document.getElementById("campo2");
        var campo3 = document.getElementById("campo3");
        var campo4 = document.getElementById("campo4");
        campoID.value = trClick.childNodes[0].innerHTML;
        campo0.value = trClick.childNodes[1].innerHTML;
        campo1.value = trClick.childNodes[2].innerHTML;
        campo2.value = trClick.childNodes[3].innerHTML;
        campo3.value = trClick.childNodes[4].innerHTML;
        campo4.value = trClick.childNodes[5].innerHTML;
        abrirFormularioUno();
        //document.getElementById("campo4").value = trClick.childNodes[5].innerHTML;
        // Transfomo la fecha
        /* fecha = trClick.childNodes[3].innerHTML;
        fechaFormato = fecha.substr(6,4)+"-"+fecha.substr(3,2)+"-"+fecha.substr(0,2);
        document.getElementById("idfecha").value = fechaFormato;
        document.getElementById("idTurno").value = trClick.childNodes[4].innerHTML; */
        // Selecciona el turno en un boton radio
        /* if(document.getElementById("idTurno").value == "Mañana"){
              document.querySelector('#radiobuttonset > [value="Mañana"]').checked = true;
        }
        else{
            document.querySelector('#radiobuttonset > [value="Noche"]').checked = true;
        }
        document.getElementById("Scuatrimestre").value = trClick.childNodes[2].innerHTML;  */
    }
    general.clickModifica = clickModifica;
    function procesarPromedio() {
        var campoResultado = document.getElementById("promedio");
        var obtenerDato = general.miManejadora.calcularPromedio().then(function (resolve) {
            console.log(resolve);
            campoResultado.value = (resolve).toString();
        });
    }
    general.procesarPromedio = procesarPromedio;
    function limpiarPromedio() {
        var elementoCalculado = document.getElementById("promedio");
        elementoCalculado.value = "";
    }
    general.limpiarPromedio = limpiarPromedio;
})(general || (general = {}));
function agregarEmpleado() {
    throw new Error("Function not implemented.");
}
