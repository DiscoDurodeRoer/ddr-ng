import { Component, inject } from '@angular/core';
import { DdrChipComponent, DdrToastService, DdrTranslatePipe, DdrTranslateService } from 'ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'chip-showcase',
  templateUrl: './chip-showcase.component.html',
  imports: [
    BaseShowcaseComponent,
    DdrChipComponent,
    DdrTranslatePipe,
    JsonPipe,
    FormsModule
  ],
  providers: [
    DdrToastService
  ]
})
export class ChipShowcaseComponent {

  private readonly ddrToastService: DdrToastService = inject(DdrToastService);
  private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  public values: string[] = ["item 1", "item 2"]

  getValues(items: string[]) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('chip.elements'),
      JSON.stringify(items)
    );
  }

  clickValue(item: string) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('chip.selected.element'),
      item
    );
  }

  insertValue(item: string) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('chip.insert.element'),
      item
    );
  }

  removeValue(item: string) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('chip.remove.element'),
      item
    );
  }

}
