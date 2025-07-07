import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DdrButtonComponent, DdrCardComponent, DdrInputComponent, DdrLoopNumberPipe, DdrRadioComponent, DdrSelectItem, DdrSkeletonComponent, DdrSkeletonDirective, DdrSkeletonMode, DdrToastService } from 'ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';

@Component({
  selector: 'app-skeleton-showcase',
  templateUrl: './skeleton-showcase.component.html',
  styleUrls: ['./skeleton-showcase.component.scss'],
  imports: [
    BaseShowcaseComponent,
    DdrSkeletonComponent,
    DdrCardComponent,
    FormsModule,
    DdrButtonComponent,
    DdrInputComponent,
    DdrLoopNumberPipe,
    DdrSkeletonDirective,
    DdrRadioComponent
  ],
  providers: [
    DdrToastService
  ]
})
export class SkeletonShowcaseComponent {

  private ddrToastService: DdrToastService = inject(DdrToastService);

  public modeEx1: string = 'circle';
  public loadEx1: boolean = true;
  public timeoutEx1: number = 5000;
  public nElementsEx1: number = 1;

  public modeEx2: DdrSkeletonMode = 'card';
  public loadEx2: boolean = true;
  public timeoutEx2: number = 5000;
  public nElementsEx2: number = 1;

  public optionsEx1: DdrSelectItem<string>[] = [
    {
      label: 'Circulo',
      value: 'circle'
    },
    {
      label: 'Rectangulo',
      value: 'rectangule'
    },
    {
      label: 'Cuadrado',
      value: 'square'
    }
  ];

  public optionsEx2: DdrSelectItem<DdrSkeletonMode>[] = [
    {
      label: 'Card',
      value: 'card'
    },
    {
      label: 'Lista',
      value: 'list'
    },
    {
      label: 'Graphic',
      value: 'graphic'
    }
  ];

  loadDataEx1() {
    this.loadEx1 = false;
    setTimeout(() => {
      this.loadEx1 = true;
    }, this.timeoutEx1);
  }

  loadDataEx2() {
    this.loadEx2 = false;
    setTimeout(() => {
      this.loadEx2 = true;
    }, this.timeoutEx2);
  }

}
