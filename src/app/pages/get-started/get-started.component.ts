import {
  AfterViewInit,
  Component,
  inject,
} from '@angular/core';
import {
  DdrTableCol,
  DdrTableComponent,
  DdrTableItem
} from 'ddr-ng/components/table';
import {
  DdrTranslateService,
  DdrTranslatePipe
} from 'ddr-ng/translate';
import { DocumentationProvider } from '../../showcase/base-showcase/bean/documentation';
import { DdrCardComponent } from 'ddr-ng/components/card';
import { DdrButtonComponent } from 'ddr-ng/components/button';
import { DdrClipboardDirective } from 'ddr-ng/directives/clipboard';
import { DdrToastService } from 'ddr-ng/toast';
declare var Prism: any;

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  imports: [
    DdrCardComponent,
    DdrButtonComponent,
    DdrTranslatePipe,
    DdrClipboardDirective,
    DdrTableComponent
  ],
  providers: [
    DdrToastService
  ],
})
export class GetStartedComponent implements AfterViewInit {
  private ddrToastService: DdrToastService = inject(DdrToastService);
  private ddrTranslateService: DdrTranslateService =
    inject(DdrTranslateService);

  public stylesEx1 = `
              "node_modules/ddr-ng/resources/themes/ddr-blue.scss",
              "node_modules/bootstrap/dist/css/bootstrap.min.css",
              "node_modules/bootstrap-icons/font/bootstrap-icons.css",
              "src/styles.scss"`;

  public stylesEx2 = `
              "node_modules/ddr-ng/resources/themes/ddr-blue.scss",
              "node_modules/ddr-ng/resources/themes/ddr-dark.scss",
              "node_modules/ddr-ng/resources/themes/ddr-purple.scss",
              "node_modules/bootstrap/dist/css/bootstrap.min.css",
              "node_modules/bootstrap-icons/font/bootstrap-icons.css",
              "src/styles.scss"`;

  public colsDdrConfig: DdrTableCol[] = [
    {
      label: 'provider.name',
      property: 'name',
    },
    {
      label: 'provider.description',
      property: 'description',
    },
    {
      label: 'provider.type',
      property: 'type',
    },
    {
      label: 'provider.required',
      property: 'required',
    }
  ];

  public colsDdrThemeConfig: DdrTableCol[] = [
    {
      label: 'provider.name',
      property: 'name',
    },
    {
      label: 'provider.description',
      property: 'description',
    },
    {
      label: 'provider.type',
      property: 'type',
    },
    {
      label: 'provider.required',
      property: 'required',
    },
    {
      label: 'provider.values',
      property: 'values',
    }
  ];

  public colsDdrTranslateConfig: DdrTableCol[] = [
    {
      label: 'provider.name',
      property: 'name',
    },
    {
      label: 'provider.description',
      property: 'description',
    },
    {
      label: 'provider.type',
      property: 'type',
    },
    {
      label: 'provider.required',
      property: 'required',
    }
  ];

  public itemsDdrConfig: DdrTableItem<DocumentationProvider>[] = [
    {
      item: {
        name: 'theme',
        description: 'get.started.theme.provider',
        type: 'object',
        required: false
      }
    },
    {
      item: {
        name: 'translate',
        description: 'get.started.translate.provider',
        type: 'object',
        required: false
      }
    }
  ]

  public itemsDdrThemeConfig: DdrTableItem<DocumentationProvider>[] = [
    {
      item: {
        name: 'name',
        description: 'get.started.theme.provider.name',
        type: 'DdrTheme',
        required: true,
        default: 'ddr-blue',
        values: `'ddr-blue' | 'ddr-dark' | 'ddr-purple'`
      }
    }
  ]

  public itemsDdrTranslateConfig: DdrTableItem<DocumentationProvider>[] = [
    {
      item: {
        name: 'path',
        description: 'get.started.translate.provider.path',
        type: 'string',
        required: true
      }
    },
    {
      item: {
        name: 'language',
        description: 'get.started.translate.provider.language',
        type: 'string',
        required: false
      }
    }
  ]

  ngAfterViewInit(): void {
    setTimeout(() => {
      Prism.highlightAll();
    });
  }

  copyText() {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('get.started.copy.text'),
    );
  }
}
