import { Post } from './Post';
import { Repo } from './Repo';
import { User } from './User';
import * as request from 'request';

const OPTIONS: any = {
    headers: {
        'User-Agent': 'request'
    },
    json: true,
}

export class GitHubService {
    /**If the endpoint demands a parameter, pass it with the URL
    *and also if options is needed with the headers, pass it as
    *specified in the commented options below
    */getUserInfo(userName: string, cb: (user: User) => any) {
        request.get('https://api.github.com/users/' + userName, OPTIONS, (error: any, response: any, body: any) => {
            let user = new User(body);
            // console.log(user);
            cb(user);
        });
    }

    getRepos(userName: string, cb: (repos: Repo[]) => any) {
        request.get('https://api.github.com/users/' + userName + '/repos', OPTIONS, (error: any, response: any, body: any) => {
            // let repoArray = body;
            let repos = body.map((repo: any) => new Repo(repo));

            cb(repos);
        });
    }



        //    getUserInfo (){
    //        let options: any = {
    //            json: true,
    //        }
    //        request.get('https://jsonplaceholder.typicode.com/users', options, (error: any, response: any, body: any) => {
    //             // let user = new User(JSON.parse(body));
    //             let user = new User(body);

    //             console.log(user);
    //             // console.log(body);
    //             // console.log(response);
    //             // console.log(error);
    //         });
    //     }    

}
