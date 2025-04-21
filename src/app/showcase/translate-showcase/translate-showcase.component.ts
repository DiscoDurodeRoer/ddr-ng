import { Component, inject, OnInit } from '@angular/core';
import { DdrTranslatePipe, DdrTranslateService } from '@ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';

@Component({
  selector: 'app-translate-showcase',
  templateUrl: './translate-showcase.component.html',
  styleUrls: ['./translate-showcase.component.scss'],
  standalone: true,
  imports: [
    BaseShowcaseComponent,
    DdrTranslatePipe
  ]
})
export class TranslateShowcaseComponent implements OnInit {

  private readonly translate: DdrTranslateService = inject(DdrTranslateService);

  ngOnInit() {
    console.log(this.translate.getTranslate('example.1'));
    console.log(this.translate.getTranslate('example.2'));
  }

}
