import { Component } from '@angular/core';
import { DdrCardComponent } from 'ddr-ng/components/card';
import { DdrTranslatePipe } from 'ddr-ng/translate';
import Prism from 'prismjs';
import 'prismjs/components/prism-typescript';

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrl: './translate.component.scss',
  imports: [DdrCardComponent, DdrTranslatePipe],
})
export class TranslateComponent {
  ngAfterViewInit(): void {
    setTimeout(() => {
      Prism.highlightAll();
    });
  }
}
