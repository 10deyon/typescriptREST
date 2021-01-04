"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GitHubService_1 = require("./GitHubService");
// import { Post } from './Post';
// import { FakeJsonService } from './FakeJsonService';
var api = new GitHubService_1.GitHubService();
if (process.argv.length < 3) {
    console.log("Please, enter a valid username");
}
else {
    var userName = process.argv[2];
    api.getUserInfo(userName, function (user) {
        console.log(user);
    });
}
// api.getRepos('octocat', (repos: Repo[]) => {
//     // user.repos = sortedRepos;
//     console.log(repos);
// });
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
