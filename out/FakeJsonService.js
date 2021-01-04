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
exports.FakeJsonService = void 0;
var request = __importStar(require("request"));
// const OPTIONS: any = {
//     headers: {
//         'User-Agent': 'request'
//     },
//     json: true,
// }
var FakeJsonService = /** @class */ (function () {
    function FakeJsonService() {
    }
    FakeJsonService.prototype.getPosts = function (cb) {
        request.get('https://jsonplaceholder.typicode.com/posts', function (error, response, body) {
            console.log(body);
            // let posts = body.map((post: any) => new Post(post));
            // cb(posts);
        });
    };
    return FakeJsonService;
}());
exports.FakeJsonService = FakeJsonService;
