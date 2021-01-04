"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = /** @class */ (function () {
    // address: string;
    // phone: number;
    // website: string;
    // company: string;
    // posts?: Post[];
    function User(userResponse) {
        this.login = userResponse.login;
        this.blog = userResponse.blog;
        this.email = userResponse.email;
        // this.address = userResponse.address;
        // this.phone = userResponse.phone;
        // this.website = userResponse.website;
        // this.company = userResponse.company;
        // this.posts = userResponse.post;
    }
    return User;
}());
exports.User = User;
