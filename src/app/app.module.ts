import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { App } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

//App Modules
import { AuthModule } from '../pages/auth/auth.module';
import { CoreModule } from '../pages/core/core.module';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';

@NgModule({
    declarations: [
        App,
        AboutPage,
        ContactPage,
        HomePage,
        TabsPage
    ],
    imports: [
        AuthModule,
        BrowserModule,
        CoreModule,
        IonicModule.forRoot(App),
        HttpModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        App,
        AboutPage,
        ContactPage,
        HomePage,
        TabsPage
    ],
    providers: [
        { provide: ErrorHandler, useClass: IonicErrorHandler },
        StatusBar,
        SplashScreen,
        AuthProvider
    ]
})
export class AppModule { }
