import { User } from './User';
import { Repo } from './Repo';
import { GitHubService } from './GitHubService';
import * as _ from 'lodash';

// import { Post } from './Post';
// import { FakeJsonService } from './FakeJsonService';

let api = new GitHubService();

if (process.argv.length < 3) {
    console.log("Please, enter a valid username");
} else {
    let userName = process.argv[2];
    api.getUserInfo(userName, (user: User) => {
        console.log(user);
    });
    
    api.getRepos(userName, (repos: Repo[]) => {
        // user.repos = sortedRepos;
        console.log(repos);
    });
}


// api.getUserInfo('octocat', (user: User) => {
//     api.getRepos('octocat', (repos: Repo[]) => {
//         let sortedRepos = _.sortBy(repos, [(repo: Repo) => repo.forkCount]);
//         user.repos = sortedRepos;
//         console.log(user);
//     });
// });



// let svc = new FakeJsonService();
// svc.getPosts((posts: Post[]) => {
//     console.log(posts);
// });