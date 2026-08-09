import { Component } from '@angular/core';
import { DdrInputPasswordComponent } from 'ddr-ng/components/input-password';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-password-showcase-2',
  templateUrl: './input-password-showcase-2.component.html',
  imports: [
    DdrInputPasswordComponent,
    DdrTranslatePipe
  ]
})
export class InputPasswordShowcase2Component {}
