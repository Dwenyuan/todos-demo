import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InboxComponent } from './inbox.component';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { InboxService } from './inbox.service';
import { Collect } from 'src/app/model/collect.model';
@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: InboxComponent }])
  ],
  declarations: [InboxComponent]
})
export class InboxPageModule {
  constructor(private inboxService: InboxService) {}

  getCollects(): Collect[] {
    return this.inboxService.getCollects();
  }
}
