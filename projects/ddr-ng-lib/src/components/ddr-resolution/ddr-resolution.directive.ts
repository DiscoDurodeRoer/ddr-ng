import { Directive, HostListener, inject, OnInit } from '@angular/core';
import { DdrResolutionService } from './ddr-resolution.service';

@Directive({
    selector: '[ddrResolution]',
    standalone: false
})
export class DdrResolutionDirective implements OnInit{

  private readonly device: DdrResolutionService = inject(DdrResolutionService);

  ngOnInit(): void {
    this.sendSize(window.innerWidth);
  }

  @HostListener('window:resize', ['$event']) onResize(event: any) {
    this.sendSize(event.currentTarget.innerWidth);
  }

  sendSize(width: number) {
    this.device.setSize(width);
  }

}