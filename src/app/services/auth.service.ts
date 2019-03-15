import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {

    isAuth = false;
    userId = 0;

    users = [];

    constructor(private http: HttpClient) {}

    signIn(mail: string) {
        return new Promise(
            (res, rej) => {
                const user = this.users.find(
                    (userObject) => {
                        return userObject.mail === mail;
                    }
                );
                if (user.id) {
                    this.userId = user.id;
                    this.isAuth = true;
                    setTimeout(
                        () => {
                            res(true);
                        }, 500
                    );
                } else {
                    rej(true);
                }
            }
        );
    }

    getUsers() {
        return this.users;
    }

    setUsers(newUsers) {
        this.users = newUsers;
    }

    addUser(user) {
        this.users.push(user);
        this.saveUsersToServer();
    }

    deleteUser(id: number) {
        this.users.splice(id, 1 );
        this.saveUsersToServer();
    }

    signOut() {
        this.isAuth = false;
        this.userId = 0;
    }

    getAuth() {
        return this.isAuth;
    }

    getCurrentUser() {
        const user = this.users.find(
            (userObject) => {
                return userObject.id === +this.userId;
            }
        );
        return user;
    }

    getUserById(id) {
        const user = this.users.find(
            (userObject) => {
                return userObject.id === +id;
            }
        );
        return user;
    }

    saveUsersToServer() {
        this.http.put('https://backend-projet-matos.firebaseio.com/users.json', this.users)
            .subscribe(
                (res) => {
                    console.log('sauvegarde des users terminée');
                }
            );
    }

    getUsersFromServer() {
        this.http.get<any[]>('https://backend-projet-matos.firebaseio.com/users.json')
            .subscribe(
                (res) => {
                    console.log('reception des users terminée');
                    this.users = res;
                }
            );
    }

    isAdmin() {
        return this.userId === -1;
    }
}
