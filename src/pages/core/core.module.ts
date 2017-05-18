import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Core } from './core';

@NgModule({
  declarations: [
    Core,
  ],
  imports: [
    IonicPageModule.forChild(Core),
  ],
  exports: [
    Core
  ]
})
export class CoreModule {}
