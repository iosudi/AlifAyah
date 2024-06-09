import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FooterComponent } from './components/footer/footer.component';
import { UnauthNavbarComponent } from './components/unauth-navbar/unauth-navbar.component';
import { SharedRoutingModule } from './shared-routing.module';

@NgModule({
  declarations: [UnauthNavbarComponent, FooterComponent],
  imports: [CommonModule, SharedRoutingModule],
  exports: [UnauthNavbarComponent, FooterComponent],
})
export class SharedModule {}
