import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { SharedModule } from 'src/app/shared/shared.module';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { MainRoutingModule } from './main-routing.module';

@NgModule({
  declarations: [HomeComponent, BlogComponent],
  imports: [CommonModule, MainRoutingModule, SharedModule, CarouselModule],
})
export class MainModule {}
