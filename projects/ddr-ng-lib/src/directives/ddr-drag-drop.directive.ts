import {
  Directive,
  HostListener,
  Output,
  EventEmitter,
  Input,
  Renderer2,
  ElementRef
} from "@angular/core";
import { DomSanitizer } from '@angular/platform-browser';
import { DdrFileHandle } from "../common/ddr-file-handler.model";

@Directive({
  selector: "[DdrDragDrop]",
  standalone: true
})
export class DdrDragDropDirective {

  @Input() dragAndDropEnabled: boolean = true;
  @Output() files: EventEmitter<DdrFileHandle[]> = new EventEmitter();

  constructor(
    private renderer: Renderer2,
    private element: ElementRef,
    private sanitizer: DomSanitizer
  ) { }

  @HostListener("dragover", ["$event"]) public onDragOver(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    if (this.dragAndDropEnabled) {
      this.renderer.addClass(this.element.nativeElement, 'drag-and-drop-border');
    }
  }

  @HostListener("dragleave", ["$event"]) public onDragLeave(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    this.renderer.removeClass(this.element.nativeElement, 'drag-and-drop-border')
  }

  @HostListener('drop', ['$event']) public onDrop(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    this.renderer.removeClass(this.element.nativeElement, 'drag-and-drop-border')
    
    if (this.dragAndDropEnabled) {
      let files: DdrFileHandle[] = [];
      if(evt.dataTransfer){

        for (let i = 0; i < evt.dataTransfer.files.length; i++) {
          const file = evt.dataTransfer.files[i];
          const url = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(file));
          files.push({ file, url });
        }
        if (files.length > 0) {
          this.files.emit(files);
        }
      }
    }
  }
}
