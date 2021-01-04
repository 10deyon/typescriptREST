export class Post {
    userId: string;
    title: string;
    body: string;

    constructor (post: any) {
        this.userId = post.userId;
        this.title = post.title;
        this.body = post.body;
    }

}