import { Component } from '@angular/core';
import { DdrCheckboxBinaryComponent } from 'ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-checkbox-showcase',
  templateUrl: './checkbox-binary-showcase.component.html',
  styleUrls: ['./checkbox-binary-showcase.component.scss'],
  imports: [
    BaseShowcaseComponent,
    DdrCheckboxBinaryComponent,
    JsonPipe,
    FormsModule
  ]
})
export class CheckboxBinaryShowcaseComponent {

  value: boolean = true;

}
