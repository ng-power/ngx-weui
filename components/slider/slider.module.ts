import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SliderDirective } from './slider';

@NgModule({
  imports: [CommonModule],
  declarations: [SliderDirective],
  exports: [SliderDirective],
})
export class SliderModule {}
