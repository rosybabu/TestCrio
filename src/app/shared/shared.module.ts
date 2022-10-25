import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from '../home/banner/banner.component';
import { ColumnlayoutComponent } from '../home/columnlayout/columnlayout.component';
import { OfferComponent } from '../home/offer/offer.component';
import { TestimonialComponent } from '../home/testimonial/testimonial.component';
import { TwoColumnComponent} from '../home/two-column/two-column.component';
import { ModalComponent } from './components/modal/modal.component';

const COMPONENT = [
  HeaderComponent,
  FooterComponent,
  BannerComponent,
  ColumnlayoutComponent,
  OfferComponent,
  TestimonialComponent,
  TwoColumnComponent,ModalComponent
];
@NgModule({
  declarations: [
    COMPONENT,
    
  ],
  imports: [
    CommonModule
  ],
  exports:[
    COMPONENT]
})
export class SharedModule { }
