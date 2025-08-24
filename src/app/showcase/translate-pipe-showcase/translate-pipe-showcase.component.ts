import { Component } from '@angular/core';
import { DdrTranslatePipe } from 'ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';

@Component({
  selector: 'translate-showcase',
  templateUrl: './translate-pipe-showcase.component.html',
  imports: [
    BaseShowcaseComponent,
    DdrTranslatePipe
  ]
})
export class TranslatePipeShowcaseComponent { }
