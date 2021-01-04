import { Post } from "./Post";

export class User {
    login: string;
    blog: string;
    email: string;
    // address: string;
    // phone: number;
    // website: string;
    // company: string;
    // posts?: Post[];

    constructor (userResponse: any) {
        this.login = userResponse.login;
        this.blog = userResponse.blog;
        this.email = userResponse.email;
        // this.address = userResponse.address;
        // this.phone = userResponse.phone;
        // this.website = userResponse.website;
        // this.company = userResponse.company;
        // this.posts = userResponse.post;
    }
}