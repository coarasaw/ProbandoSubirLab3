var general;
(function (general) {
    var Persona = /** @class */ (function () {
        function Persona(id, nombre, apellido, edad) {
            this.id = id;
            this.nombre = nombre;
            this.apellido = apellido;
            this.edad = edad;
        }
        Persona.prototype.getId = function () {
            return this.id;
        };
        Persona.prototype.getNombre = function () {
            return this.nombre;
        };
        Persona.prototype.setNombre = function (nombre) {
            this.nombre = nombre;
        };
        Persona.prototype.getApellido = function () {
            return this.apellido;
        };
        Persona.prototype.setApellido = function (apellido) {
            this.apellido = apellido;
        };
        Persona.prototype.getEdad = function () {
            return this.edad;
        };
        Persona.prototype.setEdad = function (edad) {
            this.edad = edad;
        };
        Persona.prototype.getPersonaToJson = function () {
            return "{" + "id:" + this.getId + ",nombre:" + this.getNombre() + ",apellido:" + this.getApellido() + ",edad:" + this.getEdad() + "}";
        };
        return Persona;
    }());
    general.Persona = Persona;
})(general || (general = {}));
