import { animate, group, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, inject, ViewEncapsulation, input, output, viewChild } from '@angular/core';



@Component({
  selector: 'ddr-accordion',
  templateUrl: './ddr-accordion.component.html',
  styleUrls: ['./ddr-accordion.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
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

  readonly titleAccordion = input.required<string>();
  readonly open = input<boolean>(false);
  readonly shadow = input<boolean>(true);
  readonly border = input<boolean>(true);
  readonly slim = input<boolean>(false);

  readonly clickOpen = output<boolean>();

  readonly contentAccordion = viewChild.required<ElementRef>("contentAccordion");

  public state: string = 'close';
  public animate = false;

  ngAfterViewInit() {

    if (this.open()) {
      this.state = 'open';
      this.contentAccordion().nativeElement.style.overflow = 'inherit';
    }

    setTimeout(() => {
      this.animate = true;
      this.changeDetectorRef.detectChanges();
    });

  }

  openClose() {

    this.state = this.state == 'open' ? 'close' : 'open';

    this.contentAccordion().nativeElement.style.overflow = 'hidden';
    if (this.state == 'close') {
      setTimeout(() => {
        this.open = !this.open();
        this.clickOpen.emit(this.open());
        this.changeDetectorRef.detectChanges();
      }, 400);
    } else {
      this.open = !this.open();
      this.clickOpen.emit(this.open());
      setTimeout(() => {
        this.contentAccordion().nativeElement.style.overflow = 'inherit';
        this.changeDetectorRef.detectChanges();
      }, 400);
    }

  }

}
