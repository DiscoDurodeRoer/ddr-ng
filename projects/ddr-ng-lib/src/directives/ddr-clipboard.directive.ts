import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[DdrClipboard]',
  standalone: true
})
export class DdrClipboardDirective {
  @Input({ alias: 'clipboard', required: true }) textToCopy!: string;

  @HostListener('click') onClick() {
    const el = document.createElement('textarea');
    el.value = this.textToCopy;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }
}