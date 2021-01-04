"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
var Post = /** @class */ (function () {
    function Post(post) {
        this.userId = post.userId;
        this.title = post.title;
        this.body = post.body;
    }
    return Post;
}());
exports.Post = Post;
