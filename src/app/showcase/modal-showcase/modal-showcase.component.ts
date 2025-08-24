import { Component, inject } from '@angular/core';
import {
  DdrToastService,
  DdrModalComponent,
  DdrButtonComponent,
  DdrModalService,
  DdrSize,
  DdrButton,
  DdrButtonMultipleComponent,
  DdrTranslatePipe,
  DdrToggleComponent,
  DdrModalType,
  DdrTranslateService
} from 'ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'modal-showcase',
  templateUrl: './modal-showcase.component.html',
  standalone: true,
  imports: [
    BaseShowcaseComponent,
    DdrModalComponent,
    DdrButtonMultipleComponent,
    DdrButtonComponent,
    DdrTranslatePipe,
    DdrToggleComponent,
    FormsModule
  ],
  providers: [
    DdrModalService,
    DdrToastService
  ]
})
export class ModalShowcaseComponent {

  private readonly ddrModalService: DdrModalService = inject(DdrModalService);
  public readonly ddrToastService: DdrToastService = inject(DdrToastService);
  public readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  public clickOutsideEnabled: boolean = true;

  public size: DdrSize = 'medium'
  public buttonsSize: DdrButton[] = [
    {
      text: 'small',
      value: 'small'
    },
    {
      text: 'medium',
      value: 'medium'
    },
    {
      text: 'large',
      value: 'large'
    }
  ];

  public type: DdrModalType = 'info'
  public buttonsType: DdrButton[] = [
    {
      text: 'info',
      value: 'info'
    },
    {
      text: 'confirm',
      value: 'confirm'
    },
    {
      text: 'no-buttons',
      value: 'no-buttons'
    }
  ];

  public sizeButton: DdrSize = 'small'
  public buttonsSizeButton: DdrButton[] = [
    {
      text: 'small',
      value: 'small'
    },
    {
      text: 'medium',
      value: 'medium'
    },
    {
      text: 'large',
      value: 'large'
    }
  ];

  closeModal() {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('modal.closed'),
    );
  }

  openModal() {
    this.ddrModalService.open('modal-example');
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('modal.open'),
    );
  }

  clickOutside($event: any) {
    console.log($event);
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('modal.clickoutside'),
    );
  }
}
