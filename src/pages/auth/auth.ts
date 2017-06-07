import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { InAppBrowser } from '@ionic-native/in-app-browser';

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

    constructor(public navCtrl: NavController, public navParams: NavParams, private authProvider: AuthProvider, private iap: InAppBrowser) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad Auth');
    }

    authenticate(): void {
        // this.authProvider.authenticate()
        // .subscribe((token) => {
        //     console.log(token);
        // });
        const authIap = this.iap.create('https://phoenix-auth.herokuapp.com/auth', '_system');

        authIap
            .on('loadstart')
            .subscribe((event) => {
                if (event.url.indexOf('callback') > -1) {
                    let params = new URLSearchParams(event.url);
                    let code = params.get('code');
                    alert(code);

                    authIap.close();
                    
                    // let responseParameters = ((event.url).split("#")[1]).split("&");
                    // let parsedResponse = {};
                    // for (let i = 0; i < responseParameters.length; i++) {
                    //     parsedResponse[responseParameters[i].split("=")[0]] = responseParameters[i].split("=")[1];
                    // }
                    // if (!parsedResponse['code']) {
                    //     //Não retornou code
                    //     authIap.close();
                    // } else {
                    //     const code = parsedResponse['code'];
                    //     alert(code);
                    //     authIap.close();
                    // }
                }
            });
    }

}
