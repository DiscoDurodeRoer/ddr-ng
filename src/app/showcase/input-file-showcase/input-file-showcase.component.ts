import { Component } from '@angular/core';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { DdrInputFileComponent } from 'ddr-ng';

@Component({
  selector: 'app-input-file-showcase',
  templateUrl: './input-file-showcase.component.html',
  styleUrl: './input-file-showcase.component.scss',
  imports: [
    BaseShowcaseComponent,
    DdrInputFileComponent
  ]
})
export class InputFileShowcaseComponent {

}
