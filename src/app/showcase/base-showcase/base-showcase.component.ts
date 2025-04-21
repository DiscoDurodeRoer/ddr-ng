import { Component, ContentChild, ElementRef, inject, Input, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { DdrAccordionComponent, DdrTabItemComponent, DdrTabsComponent } from '@ddr-ng';
import Prism from 'prismjs';
import * as prettier from 'prettier/standalone';
import * as htmlParser from 'prettier/plugins/html';

@Component({
  selector: 'base-showcase',
  templateUrl: './base-showcase.component.html',
  styleUrls: ['./base-showcase.component.scss'],
  standalone: true,
  imports: [
    DdrAccordionComponent,
    DdrTabsComponent,
    DdrTabItemComponent
  ]
})
export class BaseShowcaseComponent {

  private viewContainerRef: ViewContainerRef = inject(ViewContainerRef);

  @Input() showDescription: boolean = true;
  @Input() showExamples: boolean = true;
  @Input() showCode: boolean = true;
  @Input() showInputs: boolean = true;
  @Input() showOutputs: boolean = true;
  @Input() showTranslations: boolean = false;
  @Input() componentName!: string; // Recibe el nombre del componente hijo

  codeHtml = '';
  codeCss = '';
  codeTs = '';

  @ContentChild('example', { static: false }) htmlTemplate!: ElementRef;

  obtenerHtml() {
    if (this.htmlTemplate) {
      this.codeHtml = this.htmlTemplate.nativeElement.innerHTML;
    }
  }

  ngAfterViewInit() {
    // setTimeout(async () => {

    //   const examplesElement = this.viewContainerRef.element.nativeElement.querySelector('[examples]');
    //   if (examplesElement) {

    //     const divClonado = examplesElement.cloneNode(true);

    //     // Eliminar atributos `_ngcontent-*`
    //     divClonado.querySelectorAll('*').forEach((el: Element) => {
    //       for (const attr of el.getAttributeNames()) {
    //         if (attr.startsWith('_ngcontent-')) {
    //           el.removeAttribute(attr);
    //         }
    //       }
    //     });


    //     this.codeHtml = await prettier.format(divClonado.innerHTML, {
    //       parser: 'html',
    //       plugins: [htmlParser],
    //     });
    //     Prism.highlightAll()
    //     // this.codeHtml = Prism.highlight(examplesElement.innerHTML.trim().replace(/></g, '>\n<'), Prism.languages['html'], 'html')
    //   }
    // });


  }

}
