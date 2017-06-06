import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the Auth page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
    selector: 'page-auth',
    templateUrl: 'auth.html',
})
export class Auth {

    constructor(public navCtrl: NavController, public navParams: NavParams, private authProvider: AuthProvider) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad Auth');
    }

    authenticate(): void {
        this.authProvider.authenticate()
        .subscribe((token) => {
            console.log(token);
        })
    }

}
