import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AppareilService  {

    appareils: any[];

    constructor(private http: HttpClient) {}


    getAppareilById(id) {
        const appareil = this.appareils.find(
            (appareilObject) => {
                return appareilObject.id === id;
            }
        );
        return appareil;
    }

    setAppareilById(id , newAppareil) {
        const appareil = this.appareils.find(
            (appareilObject) => {
                return appareilObject.id === id;
            }
        );
        const index = this.appareils.indexOf(appareil);
        this.appareils[index] = newAppareil;
        this.saveAppareilsToServer();
    }


    toutRendre(currentUserId) {
        for (const appareil of this.appareils) {
            if (appareil.emprunterId === currentUserId || currentUserId === -1) {
                appareil.statut = 1;
            }
        }
    }

    toutEmprunter(currentUserId) {
        for (const appareil of this.appareils) {
            if (appareil.statut === 1) {
                appareil.statut = 0;
                appareil.emprunterId = currentUserId;
            }
        }

    }

    emprunter(index: number, emprunterId: number) {
        this.appareils[index].statut = 0;
        this.appareils[index].emprunterId = emprunterId;
    }

    rendre(index: number, rendeurId: number) {

            this.appareils[index].statut = 1;
            this.appareils[index].emprunterId = 0;

    }

    delete(index: number) {
        this.appareils.splice(index, 1);
        this.saveAppareilsToServer();
    }

    nouvelAppareil(nom: string, statut: number, vrainom: string, emprunterId: number) {
        const nouvelAppareil = {
            id: 0,
            nom: '',
            statut: 0,
            emprunterId: 0,
            vrainom: ''
        };
        nouvelAppareil.nom = nom;
        nouvelAppareil.statut = +statut;
        nouvelAppareil.id = this.appareils[this.appareils.length - 1].id + 1;
        nouvelAppareil.vrainom = vrainom;
        if (!+statut) {
            nouvelAppareil.emprunterId = emprunterId;
        }
        this.appareils.push(nouvelAppareil);
        this.saveAppareilsToServer();
    }

    getAppareilsFromServer() {
        this.http.get<any[]>('https://backend-projet-matos.firebaseio.com/appareils.json')
            .subscribe(
                (res) => {
                    console.log('reception des appareils terminée');
                    this.appareils = res;
                },
                (err) => {
                    console.log('erreur de reception des appareils', err);
                }
            );
    }

    saveAppareilsToServer() {
        this.http.put('https://backend-projet-matos.firebaseio.com/appareils.json', this.appareils)
        .subscribe(
            () => {
                console.log('enregistrement des apparreils terminé');
            },
            (err) => {
                console.log('erreur d\'enregistrement' + err);
            }
        );
    }

}
