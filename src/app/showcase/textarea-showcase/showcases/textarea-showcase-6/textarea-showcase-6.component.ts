import { Component } from '@angular/core';
import { DdrTextareaComponent } from 'ddr-ng/components/textarea';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'textarea-showcase-6',
  templateUrl: './textarea-showcase-6.component.html',
  imports: [
    DdrTextareaComponent,
    DdrTranslatePipe
  ]
})
export class TextareaShowcase6Component {}
