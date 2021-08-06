var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/// <reference path="persona.ts" />
var general;
(function (general) {
    //export enum eSexo{femenino='Femenino',masculino='Masculino'};
    var Empleado = /** @class */ (function (_super) {
        __extends(Empleado, _super);
        function Empleado(id, nombre, apellido, edad, legajo, horario) {
            var _this = _super.call(this, id, nombre, apellido, edad) || this;
            _this.legajo = legajo;
            _this.horario = horario;
            return _this;
        }
        Empleado.prototype.getLegajo = function () {
            return this.legajo;
        };
        Empleado.prototype.setLegajo = function () {
            this.legajo = this.legajo;
        };
        Empleado.prototype.getHorario = function () {
            return this.horario;
        };
        Empleado.prototype.setHorario = function () {
            this.horario = this.horario;
        };
        Empleado.prototype.empleadoToJson = function () {
            return "{" + this.getPersonaToJson() + ",legajo:" + this.getLegajo() + ",horario:" + this.getHorario() + "}";
        };
        return Empleado;
    }(general.Persona));
    general.Empleado = Empleado;
})(general || (general = {}));
