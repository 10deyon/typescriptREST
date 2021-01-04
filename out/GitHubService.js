"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitHubService = void 0;
var Repo_1 = require("./Repo");
var User_1 = require("./User");
var request = __importStar(require("request"));
var OPTIONS = {
    headers: {
        'User-Agent': 'request'
    },
    json: true,
};
var GitHubService = /** @class */ (function () {
    function GitHubService() {
    }
    /**If the endpoint demands a parameter, pass it with the URL
    *and also if options is needed with the headers, pass it as
    *specified in the commented options below
    */ GitHubService.prototype.getUserInfo = function (userName, cb) {
        request.get('https://api.github.com/users/' + userName, OPTIONS, function (error, response, body) {
            var user = new User_1.User(body);
            // console.log(user);
            cb(user);
        });
    };
    GitHubService.prototype.getRepos = function (userName, cb) {
        request.get('https://api.github.com/users/' + userName + '/repos', OPTIONS, function (error, response, body) {
            // let repoArray = body;
            var repos = body.map(function (repo) { return new Repo_1.Repo(repo); });
            cb(repos);
        });
    };
    return GitHubService;
}());
exports.GitHubService = GitHubService;
