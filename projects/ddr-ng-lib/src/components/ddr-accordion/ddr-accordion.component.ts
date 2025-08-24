import { animate, group, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, EventEmitter, inject, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { DdrButtonComponent } from '../ddr-button/ddr-button.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'ddr-accordion',
  templateUrl: './ddr-accordion.component.html',
  styleUrls: ['./ddr-accordion.component.scss'],
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [
    DdrButtonComponent,
    NgClass
  ],
  animations: [
    trigger('slideInOut', [
      state('open', style({ height: '*' })),
      state('close', style({ height: 0 })),
      transition('open <=> close', group([
        animate('400ms')
      ]))
    ])
  ]
})
export class DdrAccordionComponent implements AfterViewInit {

  private changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);

  @Input({ required: true }) titleAccordion!: string;
  @Input() open: boolean = false;
  @Input() shadow: boolean = true;
  @Input() border: boolean = true;
  @Input() slim: boolean = false;

  @Output() clickOpen: EventEmitter<boolean> = new EventEmitter<boolean>();

  @ViewChild("contentAccordion") contentAccordion!: ElementRef;

  public state: string = 'close';
  public animate = false;

  ngAfterViewInit() {

    if (this.open) {
      this.state = 'open';
      this.contentAccordion.nativeElement.style.overflow = 'inherit';
    }

    setTimeout(() => {
      this.animate = true;
    });

    this.changeDetectorRef.detectChanges();

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
