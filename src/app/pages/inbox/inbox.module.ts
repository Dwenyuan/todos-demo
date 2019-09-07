import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InboxComponent } from './inbox.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: InboxComponent }])
  ],
  declarations: [InboxComponent]
})
export class InboxPageModule {}
