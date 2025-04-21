import { Component } from '@angular/core';
import { DdrLoopNumberPipe } from '@ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';

@Component({
  selector: 'app-loop-number-showcase',
  templateUrl: './loop-number-showcase.component.html',
  styleUrls: ['./loop-number-showcase.component.scss'],
  standalone: true,
  imports: [
    BaseShowcaseComponent,
    DdrLoopNumberPipe
  ]
})
export class LoopNumberShowcaseComponent {

}
