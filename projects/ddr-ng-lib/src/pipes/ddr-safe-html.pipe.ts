import { inject, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safeHtml',
  standalone: true
})
export class DdrSafeHtmlPipe implements PipeTransform {
  
  private sanitized: DomSanitizer = inject(DomSanitizer);

  transform(value: any) {
    return this.sanitized.bypassSecurityTrustHtml(value);
  }
}
