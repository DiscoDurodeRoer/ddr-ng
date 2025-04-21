import { animate, group, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { DdrButtonComponent } from '../ddr-button/ddr-button.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'ddr-accordion',
  templateUrl: './ddr-accordion.component.html',
  styleUrls: ['./ddr-accordion.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [
    DdrButtonComponent,
    NgClass
  ],
  animations: [
    trigger('slideInOut', [
      state('open', style({ height: '*' })),
      state('close', style({ height: 0 })),
      transition('open <=> close', group(
        [
          animate('400ms')
        ])
      )
    ])
  ]
})
export class DdrAccordionComponent implements AfterViewInit {

  @Input({ required: true }) titleAccordion!: string;
  @Input() open: boolean = false;
  @Input() shadow: boolean = true;
  @Input() border: boolean = true;
  @Input() slim: boolean = false;

  @Output() clickOpen: EventEmitter<boolean> = new EventEmitter<boolean>();;

  @ViewChild("contentAccordion") contentAccordion!: ElementRef;

  public state: string = 'close';

  ngAfterViewInit() {

    if (this.open) {
      this.contentAccordion.nativeElement.style.overflow = 'hidden';
      setTimeout(() => {
        this.state = 'open';
        this.contentAccordion.nativeElement.style.overflow = 'inherit';
      }, 400);
    }
  }

  openClose() {

    this.state = this.state == 'open' ? 'close' : 'open';

    this.contentAccordion.nativeElement.style.overflow = 'hidden';
    if (this.state == 'close') {
      setTimeout(() => {
        this.open = !this.open;
        this.clickOpen.emit(this.open);
      }, 400);
    } else {
      this.open = !this.open;
      this.clickOpen.emit(this.open);
      setTimeout(() => {
        this.contentAccordion.nativeElement.style.overflow = 'inherit';
      }, 400);
    }

  }

}
