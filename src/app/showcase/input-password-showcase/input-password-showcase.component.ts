import { Component } from '@angular/core';
import { DdrInputPasswordComponent } from 'ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-input-password-showcase',
    templateUrl: './input-password-showcase.component.html',
    styleUrls: ['./input-password-showcase.component.scss'],
    imports: [
        BaseShowcaseComponent,
        DdrInputPasswordComponent,
        FormsModule
    ]
})
export class InputPasswordShowcaseComponent {

  public value1 = '';
  public value2 = '';
  public value3 = '';

}
