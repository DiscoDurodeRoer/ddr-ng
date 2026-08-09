import { Component } from '@angular/core';
import { DdrInputComponent } from 'ddr-ng/components/input';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-showcase-15',
  templateUrl: './input-showcase-15.component.html',
  styleUrl: './input-showcase-15.component.scss',
  imports: [
    DdrInputComponent,
    DdrTranslatePipe
  ]
})
export class InputShowcase15Component {}
