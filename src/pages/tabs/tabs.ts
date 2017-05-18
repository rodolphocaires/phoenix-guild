import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';

import { Core } from '../core/core';

@Component({
    templateUrl: 'tabs.html'
})
export class TabsPage {

    home = HomePage;
    core = Core;
    about = AboutPage;

    constructor() {

    }
}
