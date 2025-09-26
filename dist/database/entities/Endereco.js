"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Endereco = void 0;
const typeorm_1 = require("typeorm");
const Cliente_1 = require("./Cliente");
let Endereco = class Endereco {
};
exports.Endereco = Endereco;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Endereco.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar" }),
    __metadata("design:type", String)
], Endereco.prototype, "municipio", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "char", length: 2 }),
    __metadata("design:type", String)
], Endereco.prototype, "uf", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar" }),
    __metadata("design:type", String)
], Endereco.prototype, "logradouro", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 11 }),
    __metadata("design:type", String)
], Endereco.prototype, "cep", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int" }),
    __metadata("design:type", Number)
], Endereco.prototype, "numero", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Cliente_1.Cliente, (cliente) => cliente.enderecos),
    (0, typeorm_1.JoinColumn)({ name: "cliente_id" }),
    __metadata("design:type", Cliente_1.Cliente)
], Endereco.prototype, "cliente", void 0);
exports.Endereco = Endereco = __decorate([
    (0, typeorm_1.Entity)('endereco')
], Endereco);
