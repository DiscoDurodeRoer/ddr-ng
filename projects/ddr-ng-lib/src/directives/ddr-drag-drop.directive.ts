import {
  Directive,
  HostListener,
  Output,
  EventEmitter,
  Input,
  Renderer2,
  ElementRef,
  inject
} from "@angular/core";
import { DomSanitizer } from '@angular/platform-browser';
import { DdrFileHandle } from "../common/ddr-file-handler.model";

@Directive({
  selector: "[ddrDragDrop]",
  standalone: true
})
export class DdrDragDropDirective {

  @Input() dragDropEnabled: boolean = true;
  @Output() dragDropFiles: EventEmitter<DdrFileHandle[]> = new EventEmitter();

  private renderer: Renderer2 = inject(Renderer2);
  private element: ElementRef = inject(ElementRef);
  private sanitizer: DomSanitizer = inject(DomSanitizer);

  @HostListener("dragover", ["$event"]) public onDragOver(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    if (this.dragDropEnabled) {
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
    
    if (this.dragDropEnabled) {
      let files: DdrFileHandle[] = [];
      if(evt.dataTransfer){

        for (let i = 0; i < evt.dataTransfer.files.length; i++) {
          const file = evt.dataTransfer.files[i];
          const url = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(file));
          files.push({ file, url });
        }
        if (files.length > 0) {
          this.dragDropFiles.emit(files);
        }
      }
    }
  }
}
