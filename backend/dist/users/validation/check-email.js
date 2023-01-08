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
exports.CheckEmail = void 0;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
const users_service_1 = require("../users.service");
let CheckEmail = class CheckEmail {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async validate(text, validationArguments) {
        const email = validationArguments.value;
        const { object } = validationArguments;
        const exists = await this.usersService.find(email);
        if (object['id'] && exists) {
            return exists.id === object['id'];
        }
        return !exists;
    }
};
CheckEmail = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ name: 'email', async: true }),
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], CheckEmail);
exports.CheckEmail = CheckEmail;
//# sourceMappingURL=check-email.js.map