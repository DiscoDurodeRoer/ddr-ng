import { Component } from '@angular/core';
import { DdrTextareaComponent } from 'ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-textarea-showcase',
    templateUrl: './textarea-showcase.component.html',
    styleUrls: ['./textarea-showcase.component.scss'],
    imports: [
        BaseShowcaseComponent,
        DdrTextareaComponent,
        FormsModule
    ]
})
export class TextareaShowcaseComponent {

  value1: any;
  value2: any = "Valor inicial";
  value3: any;
  value4: any;

}
