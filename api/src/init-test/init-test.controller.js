"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.InitTestController = void 0;
var common_1 = require("@nestjs/common");
var InitTestController = /** @class */ (function () {
    function InitTestController() {
    }
    InitTestController.prototype.test = function () {
        return "It's working!";
    };
    InitTestController.prototype.teste = function () {
        return "Está funcionando!";
    };
    InitTestController.prototype.apiStatus = function () {
        return "OK";
    };
    InitTestController.prototype.database = function () {
        return "Banco está funcionando!";
    };
    InitTestController.prototype.databaseStatus = function () {
        var test = 'teste';
        return "OK";
    };
    __decorate([
        (0, common_1.Get)('test')
    ], InitTestController.prototype, "test");
    __decorate([
        (0, common_1.Get)('teste')
    ], InitTestController.prototype, "teste");
    __decorate([
        (0, common_1.Get)('api/status')
    ], InitTestController.prototype, "apiStatus");
    __decorate([
        (0, common_1.Get)('database')
    ], InitTestController.prototype, "database");
    __decorate([
        (0, common_1.Get)('database/status')
    ], InitTestController.prototype, "databaseStatus");
    InitTestController = __decorate([
        (0, common_1.Controller)('init-test')
    ], InitTestController);
    return InitTestController;
}());
exports.InitTestController = InitTestController;
