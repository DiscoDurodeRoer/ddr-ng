import {
  AfterViewInit,
  Component,
  OnInit,
  Signal,
  TemplateRef,
  WritableSignal,
  computed,
  contentChildren,
  inject,
  input,
  signal,
} from '@angular/core';
import {
  DdrTabsComponent,
  DdrTabItemComponent
} from 'ddr-ng/components/tabs'
import {
  Documentation,
  DocumentationInput,
  DocumentationOutput,
  DocumentationTranslation,
  DocumentationTemplate,
  DocumentationSlot,
  DocumentationClass,
  DocumentationServiceMethod,
  DocumentationStyle,
  DocumentationExample,
  DocumentationParam,
} from './bean/documentation';
import { NgTemplateOutlet } from '@angular/common';
import { DdrAccordionComponent } from 'ddr-ng/components/accordion';
import {
  DdrTranslatePipe,
  DdrTranslateService
} from 'ddr-ng/translate';
import {
  DdrTableCol,
  DdrTableComponent,
  DdrTableItem
} from 'ddr-ng/components/table';
import { DdrCardComponent } from 'ddr-ng/components/card';
import { DdrNestedPropertyPipe } from 'ddr-ng/pipes/nested-property';
import { DdrBadgePillComponent } from 'ddr-ng/components/badge-pill';
import { DdrButtonComponent } from 'ddr-ng/components/button';
import { DdrClipboardDirective } from 'ddr-ng/directives/clipboard';
import { DdrToastService } from 'ddr-ng/toast';

declare var Prism: any;

@Component({
  selector: 'base-showcase',
  templateUrl: './base-showcase.component.html',
  styleUrl: './base-showcase.component.scss',
  imports: [
    DdrAccordionComponent,
    DdrTabsComponent,
    DdrTabItemComponent,
    DdrTableComponent,
    DdrCardComponent,
    DdrTranslatePipe,
    DdrNestedPropertyPipe,
    DdrBadgePillComponent,
    DdrButtonComponent,
    DdrClipboardDirective,
    NgTemplateOutlet
  ],
  providers: [
    DdrToastService
  ]
})
export class BaseShowcaseComponent implements OnInit, AfterViewInit {

  private toastService: DdrToastService = inject(DdrToastService);
  private translateService: DdrTranslateService = inject(DdrTranslateService);

  readonly component = input.required<string>();
  readonly type = input.required<string>();
  readonly documentation = input.required<Documentation>();
  readonly showDescription = input<boolean>(true);
  readonly showExamples = input<boolean>(true);
  readonly showCode = input<boolean>(true);
  readonly showCodeHTML = input<boolean>(true);
  readonly showCodeTS = input<boolean>(true);
  readonly showParams = input<boolean>(false);
  readonly showInputs = input<boolean>(true);
  readonly showInputsOutputs = input<boolean>(false);
  readonly showOutputs = input<boolean>(true);
  readonly showTranslations = input<boolean>(false);
  readonly showTemplates = input<boolean>(false);
  readonly showSlots = input<boolean>(false);
  readonly hasComponentChild = input<boolean>(false);
  readonly showPossibleValues = input<boolean>(true);
  readonly showService = input<boolean>(false);
  readonly showStyles = input<boolean>(false);

  readonly componentExample = computed(() => {
    const component = this.component()
      .slice(4)
      .replaceAll('-component', '')
      .replaceAll('-pipe', '')
      .replaceAll('-directive', '')
      .replaceAll('-service', '')
      .replaceAll('-', '.')
    switch (component) {
      case 'progress.bar':
        return 'progressbar'
      case 'badge.pill':
        return 'badge'
      case 'login':
        return 'login.component'
      case 'click.outside':
        return 'clickoutside'
      default:
        return component;
    }
  });

  readonly examples: Signal<readonly TemplateRef<any>[]> = contentChildren<TemplateRef<any>>('example');

  public colsParams: DdrTableCol[] = [
    {
      label: 'params.name.showcase',
      property: 'name',
    },
    {
      label: 'params.description.showcase',
      property: 'description',
    },
    {
      label: 'params.type.showcase',
      property: 'type',
    },
    {
      label: 'params.required.showcase',
      property: 'required',
    },
    {
      label: 'params.default.showcase',
      property: 'default',
    },
    {
      label: 'params.values.showcase',
      property: 'values',
    }
  ];

  public colsInputs: DdrTableCol[] = [
    {
      label: 'inputs.name.showcase',
      property: 'name',
    },
    {
      label: 'inputs.description.showcase',
      property: 'description',
    },
    {
      label: 'inputs.type.showcase',
      property: 'type',
    },
    {
      label: 'inputs.required.showcase',
      property: 'required',
    },
    {
      label: 'inputs.default.showcase',
      property: 'default',
    },
    {
      label: 'inputs.values.showcase',
      property: 'values',
    },
  ];

  public colsInputsOutputs: DdrTableCol[] = [
    {
      label: 'inputs.name.showcase',
      property: 'name',
    },
    {
      label: 'inputs.description.showcase',
      property: 'description',
    },
    {
      label: 'inputs.type.showcase',
      property: 'type',
    },
    {
      label: 'inputs.required.showcase',
      property: 'required',
    },
    {
      label: 'inputs.default.showcase',
      property: 'default',
    }
  ];

  public colsOutputs: DdrTableCol[] = [
    {
      label: 'outputs.name.showcase',
      property: 'name',
    },
    {
      label: 'outputs.description.showcase',
      property: 'description',
    },
    {
      label: 'outputs.return.showcase',
      property: 'type',
    },
  ];

  public colsTranslations: DdrTableCol[] = [
    {
      label: 'translations.key.showcase',
      property: 'name',
    },
    {
      label: 'translations.description.showcase',
      property: 'description',
    },
  ];

  public colsTemplates: DdrTableCol[] = [
    {
      label: 'templates.name.showcase',
      property: 'name',
    },
    {
      label: 'templates.description.showcase',
      property: 'description',
    },
  ];

  public colsSlots: DdrTableCol[] = [
    {
      label: 'slots.selector.showcase',
      property: 'selector',
    },
    {
      label: 'slots.description.showcase',
      property: 'description',
    },
  ];

  public colsService: DdrTableCol[] = [
    {
      label: 'service.name.showcase',
      property: 'name',
    },
    {
      label: 'service.description.showcase',
      property: 'description',
    },
  ];

  public colsStyles: DdrTableCol[] = [
    {
      label: 'styles.class.showcase',
      property: 'class',
    },
    {
      label: 'styles.description.showcase',
      property: 'description',
    },
  ];

  public itemsInputs: WritableSignal<DdrTableItem<DocumentationInput>[]> = signal<DdrTableItem<DocumentationInput>[]>([]);
  public itemsParams: WritableSignal<DdrTableItem<DocumentationParam>[]> = signal<DdrTableItem<DocumentationParam>[]>([]);
  public itemsInputsOutputs: WritableSignal<DdrTableItem<DocumentationInput>[]> = signal<DdrTableItem<DocumentationInput>[]>([]);
  public itemsOutputs: WritableSignal<DdrTableItem<DocumentationOutput>[]> = signal<DdrTableItem<DocumentationOutput>[]>([]);
  public itemsTranslations: WritableSignal<DdrTableItem<DocumentationTranslation>[]> = signal<DdrTableItem<DocumentationTranslation>[]>([]);
  public itemsTemplates: WritableSignal<DdrTableItem<DocumentationTemplate>[]> = signal<DdrTableItem<DocumentationTemplate>[]>([]);
  public itemsSlots: WritableSignal<DdrTableItem<DocumentationSlot>[]> = signal<DdrTableItem<DocumentationSlot>[]>([]);
  public classes: WritableSignal<DocumentationClass[]> = signal<DocumentationClass[]>([]);
  public itemsServiceMethods: WritableSignal<DdrTableItem<DocumentationServiceMethod>[]> = signal<DdrTableItem<DocumentationServiceMethod>[]>([]);
  public itemsStyles: WritableSignal<DdrTableItem<DocumentationStyle>[]> = signal<DdrTableItem<DocumentationStyle>[]>([]);
  public itemsExamples: WritableSignal<DocumentationExample[]> = signal<DocumentationExample[]>([]);

  ngOnInit(): void {
    if (this.hasComponentChild()) {
      this.colsInputs.splice(1, 0, {
        label: 'inputs.component.showcase',
        property: 'component',
      });
      this.colsOutputs.splice(1, 0, {
        label: 'outputs.component.showcase',
        property: 'component',
      });
      this.colsTemplates.splice(1, 0, {
        label: 'templates.component.showcase',
        property: 'component',
      });
    }
    if (!this.showPossibleValues()) {
      this.colsInputs.splice(this.colsInputs.length - 1, 1);
      this.colsParams.splice(this.colsParams.length - 1, 1);
    }

    const component = this.component();
    if (component) {
      this.itemsInputs.set(this.documentation().inputs || []);
      this.itemsParams.set(this.documentation().params || []);
      this.itemsInputsOutputs.set(this.documentation().inputsOutputs || []);
      this.itemsOutputs.set(this.documentation().outputs || []);
      this.itemsTranslations.set(this.documentation().translations || []);
      this.itemsTemplates.set(this.documentation().templates || []);
      this.itemsSlots.set(this.documentation().slots || []);
      this.itemsServiceMethods.set(this.documentation().service?.methods || []);
      this.itemsStyles.set(this.documentation().styles || []);
      this.itemsExamples.set(this.documentation().examples || []);
    }
  }

  ngAfterViewInit(): void {
    this.highlight(50);
  }

  highlight(timeout: number = 0) {
    setTimeout(() => {
      Prism.highlightAll();
    }, timeout);
  }

  copyCode() {
    this.toastService.addSuccessMessage(
      this.translateService.getTranslate('success'),
      this.translateService.getTranslate('copy.code.success')
    )
  }
}
