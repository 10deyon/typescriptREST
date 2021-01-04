import { Post } from './Post';
import * as request from 'request';

// const OPTIONS: any = {
//     headers: {
//         'User-Agent': 'request'
//     },
//     json: true,
// }

export class FakeJsonService {

    getPosts(cb: (posts: Post[]) => any) {
        request.get('https://jsonplaceholder.typicode.com/posts', (error: any, response: any, body: any) => {
            console.log(body);

            
            // let posts = body.map((post: any) => new Post(post));

            // cb(posts);
        });
    }

}