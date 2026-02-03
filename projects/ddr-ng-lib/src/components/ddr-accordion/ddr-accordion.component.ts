import { animate, group, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, ElementRef, ViewEncapsulation, input, output, viewChild, InputSignal, WritableSignal, signal, effect } from '@angular/core';

@Component({
  selector: 'ddr-accordion',
  templateUrl: './ddr-accordion.component.html',
  styleUrl: './ddr-accordion.component.scss',
  encapsulation: ViewEncapsulation.None,
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

  readonly titleAccordion: InputSignal<string> = input.required<string>();
  readonly open: InputSignal<boolean> = input<boolean>(false);
  readonly shadow: InputSignal<boolean> = input<boolean>(true);
  readonly border: InputSignal<boolean> = input<boolean>(true);
  readonly slim: InputSignal<boolean> = input<boolean>(false);

  readonly clickOpen = output<boolean>();

  readonly contentAccordion = viewChild.required<ElementRef>("contentAccordion");

  public state: WritableSignal<string> = signal<string>('close');
  public animate: WritableSignal<boolean> = signal<boolean>(false);
  public openAccordion: WritableSignal<boolean> = signal<boolean>(this.open());

  constructor(){
    effect(() => this.openAccordion.set(this.open()));
  }

  ngAfterViewInit() {

    if (this.openAccordion()) {
      this.state.set('open');
      this.contentAccordion().nativeElement.style.overflow = 'inherit';
    }

    setTimeout(() => {
      this.animate.set(true);
    });

  }

  openClose() {

    this.state.update( (value: string) => value == 'open' ? 'close' : 'open');

    this.contentAccordion().nativeElement.style.overflow = 'hidden';
    if (this.state() == 'close') {
      setTimeout(() => {
        this.openAccordion.update( (value: boolean) => !value);
        this.clickOpen.emit(this.openAccordion());
      }, 400);
    } else {
       this.openAccordion.update( (value: boolean) => !value);
      this.clickOpen.emit(this.openAccordion());
      setTimeout(() => {
        this.contentAccordion().nativeElement.style.overflow = 'inherit';
      }, 400);
    }

  }

}
