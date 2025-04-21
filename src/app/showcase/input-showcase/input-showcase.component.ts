import { Component } from '@angular/core';
import { DdrInputComponent } from '@ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-input-showcase',
    templateUrl: './input-showcase.component.html',
    styleUrls: ['./input-showcase.component.scss'],
    imports: [
        BaseShowcaseComponent,
        DdrInputComponent,
        FormsModule
    ]
})
export class InputShowcaseComponent {

  public value1 = '';
  public value2 = '';
  public value3 = '';
  public value4 = '';
  public value5 = '';
  public value6 = '';
  public value7 = 'Estoy deshabilitado';
  public value8 = 'Solo lectura';
  public value9 = '';

}
