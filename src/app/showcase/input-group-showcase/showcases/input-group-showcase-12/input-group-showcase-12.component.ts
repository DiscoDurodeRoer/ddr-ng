import { Component } from '@angular/core';
import { DdrInputGroupComponent } from 'ddr-ng/components/input-group';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-group-showcase-12',
  templateUrl: './input-group-showcase-12.component.html',
  styleUrl: './input-group-showcase-12.component.scss',
  imports: [
    DdrInputGroupComponent,
    DdrTranslatePipe
  ]
})
export class InputGroupShowcase12Component {}
