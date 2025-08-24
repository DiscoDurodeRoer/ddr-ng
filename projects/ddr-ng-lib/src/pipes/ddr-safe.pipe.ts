import { inject, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeResourceUrl, SafeStyle, SafeUrl } from '@angular/platform-browser';

@Pipe({
  name: 'ddrSafe'
})
export class DdrSafePipe implements PipeTransform {

  private sanitized: DomSanitizer = inject(DomSanitizer);

  transform(value: any, type: 'html' | 'style' | 'url' | 'resourceUrl' = 'html'):
    SafeHtml | SafeStyle | SafeUrl | SafeResourceUrl {

    switch (type) {
      case 'style':
        return this.sanitized.bypassSecurityTrustStyle(value);
      case 'url':
        return this.sanitized.bypassSecurityTrustUrl(value);
      case 'resourceUrl':
        return this.sanitized.bypassSecurityTrustResourceUrl(value);
      default:
        return this.sanitized.bypassSecurityTrustHtml(value);
    }
  }
}
