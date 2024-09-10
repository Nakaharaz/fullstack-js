"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fetchGitHubUser(username) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`https://api.github.com/users/${username}`)
            .then(res => res.json())
            .catch(err => Promise.reject(err));
        const gitHubUser = {
            id: response.id,
            login: response.login,
            name: response.name,
            bio: response.bio,
            public_repos: response.public_repos,
            repos_url: response.repos_url
        };
        return gitHubUser;
    });
}
const enzo = fetchGitHubUser('nakaharaz').then((res) => res.login);
console.log(enzo);
