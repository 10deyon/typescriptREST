export class Repo {
    userName: string;
    description: string;
    url: string;

    constructor (repo: any) {
        this.userName = repo.name;
        this.description = repo.description;
        this.url = repo.url;
    }

}