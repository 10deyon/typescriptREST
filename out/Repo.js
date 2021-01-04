"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repo = void 0;
var Repo = /** @class */ (function () {
    function Repo(repo) {
        this.userName = repo.name;
        this.description = repo.description;
        this.url = repo.url;
    }
    return Repo;
}());
exports.Repo = Repo;
