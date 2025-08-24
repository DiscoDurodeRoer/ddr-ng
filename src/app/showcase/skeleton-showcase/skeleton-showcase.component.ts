import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { 
  DdrButtonComponent, 
  DdrCardComponent, 
  DdrInputComponent, 
  DdrLoopNumberPipe, 
  DdrRadioComponent, 
  DdrSelectItem, 
  DdrSkeletonDirective, 
  DdrTranslatePipe
} from 'ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';

@Component({
  selector: 'skeleton-showcase',
  templateUrl: './skeleton-showcase.component.html',
  imports: [
    BaseShowcaseComponent,
    DdrCardComponent,
    DdrButtonComponent,
    DdrInputComponent,
    DdrLoopNumberPipe,
    DdrSkeletonDirective,
    DdrRadioComponent,
    DdrTranslatePipe,
    FormsModule
  ]
})
export class SkeletonShowcaseComponent {

  public mode: string = 'circle';
  public load: boolean = true;
  public timeout: number = 5000;
  public nElements: number = 1;

  public options: DdrSelectItem<string>[] = [
    {
      label: 'skeleton.cirle',
      value: 'circle'
    },
    {
      label: 'skeleton.rectangle',
      value: 'rectangle'
    },
    {
      label: 'skeleton.square',
      value: 'square'
    },
    {
      label: 'skeleton.card',
      value: 'card'
    },
    {
      label: 'skeleton.list',
      value: 'list'
    },
    {
      label: 'skeleton.graphic',
      value: 'graphic'
    }
  ];

  loadData() {
    this.load = false;
    setTimeout(() => {
      this.load = true;
    }, this.timeout);
  }

}
