import { Component, Input, OnInit } from '@angular/core';
import { DdrAccordionComponent, DdrCardComponent, DdrTabItemComponent, DdrTableCol, DdrTableComponent, DdrTableItem, DdrTabsComponent, DdrTranslatePipe, DdrNestedPropertyPipe, DdrBadgePillComponent } from 'ddr-ng';
import { COMPONENTS_DOCUMENTATION } from './bean/components-documentation';
import { Documentation, DocumentationInput, DocumentationOutput, DocumentationTranslation, DocumentationTemplate, DocumentationSlot, DocumentationClass, DocumentationServiceMethod, DocumentationStyle } from './bean/documentation';
declare var Prism: any;

@Component({
  selector: 'base-showcase',
  templateUrl: './base-showcase.component.html',
  styleUrls: ['./base-showcase.component.scss'],
  standalone: true,
  imports: [
    DdrAccordionComponent,
    DdrTabsComponent,
    DdrTabItemComponent,
    DdrTableComponent,
    DdrCardComponent,
    DdrTranslatePipe,
    DdrNestedPropertyPipe,
    DdrBadgePillComponent
  ]
})
export class BaseShowcaseComponent implements OnInit {

  @Input({ required: true }) component!: string
  @Input({ required: true }) type!: string
  @Input() showDescription: boolean = true;
  @Input() showExamples: boolean = true;
  @Input() showCode: boolean = true;
  @Input() showCodeHTML: boolean = true;
  @Input() showCodeCSS: boolean = false;
  @Input() showCodeTS: boolean = true;
  @Input() showInputs: boolean = true;
  @Input() showOutputs: boolean = true;
  @Input() showTranslations: boolean = false;
  @Input() showTemplates: boolean = false;
  @Input() showSlots: boolean = false;
  @Input() hasComponentChild: boolean = false;
  @Input() showPossibleValues: boolean = true;
  @Input() showClasses: boolean = false;
  @Input() showService: boolean = false;
  @Input() showStyles: boolean = false;

  public documentationComponent!: Documentation

  public colsInputs: DdrTableCol[] = [
    {
      label: "inputs.name.showcase",
      property: "name"
    },
    {
      label: "inputs.description.showcase",
      property: "description"
    },
    {
      label: "inputs.type.showcase",
      property: "type"
    },
    {
      label: "inputs.required.showcase",
      property: "required"
    },
    {
      label: "inputs.default.showcase",
      property: "default"
    },
    {
      label: "inputs.values.showcase",
      property: "values"
    }
  ]

  public colsOutputs: DdrTableCol[] = [
    {
      label: "outputs.name.showcase",
      property: "name"
    },
    {
      label: "outputs.description.showcase",
      property: "description"
    },
    {
      label: "outputs.return.showcase",
      property: "type"
    }
  ]

  public colsTranslations: DdrTableCol[] = [
    {
      label: "translations.key.showcase",
      property: "name"
    },
    {
      label: "translations.description.showcase",
      property: "description"
    }
  ]

  public colsTemplates: DdrTableCol[] = [
    {
      label: "templates.name.showcase",
      property: "name"
    },
    {
      label: "templates.description.showcase",
      property: "description"
    }
  ]

  public colsSlots: DdrTableCol[] = [
    {
      label: "slots.selector.showcase",
      property: "selector"
    },
    {
      label: "slots.description.showcase",
      property: "description"
    }
  ]

  public colsService: DdrTableCol[] = [
    {
      label: "service.name.showcase",
      property: "name"
    },
    {
      label: "service.description.showcase",
      property: "description"
    }
  ]

  public colsStyles: DdrTableCol[] = [
    {
      label: "styles.class.showcase",
      property: "class"
    },
    {
      label: "styles.description.showcase",
      property: "description"
    }
  ]

  public htmlCode: string = '';
  public cssCode: string = '';
  public tsCode: string = '';
  public itemsInputs: DdrTableItem<DocumentationInput>[] = [];
  public itemsOutputs: DdrTableItem<DocumentationOutput>[] = [];
  public itemsTranslations: DdrTableItem<DocumentationTranslation>[] = [];
  public itemsTemplates: DdrTableItem<DocumentationTemplate>[] = [];
  public itemsSlots: DdrTableItem<DocumentationSlot>[] = [];
  public classes: DocumentationClass[] = [];
  public itemsServiceMethods: DdrTableItem<DocumentationServiceMethod>[] = [];
  public itemsStyles: DdrTableItem<DocumentationStyle>[] = [];

  ngOnInit(): void {
    if (this.hasComponentChild) {
      this.colsInputs.splice(1, 0, {
        label: 'inputs.component.showcase',
        property: 'component'
      })
      this.colsOutputs.splice(1, 0, {
        label: 'outputs.component.showcase',
        property: 'component'
      })
      this.colsTemplates.splice(1, 0, {
        label: 'templates.component.showcase',
        property: 'component'
      })
    }
    if (!this.showPossibleValues) {
      this.colsInputs.splice(this.colsInputs.length - 1, 1)
    }

    if (this.component) {
      this.documentationComponent = COMPONENTS_DOCUMENTATION[this.component];
      this.itemsInputs = this.documentationComponent.inputs || [];
      this.itemsOutputs = this.documentationComponent.outputs || [];
      this.itemsTranslations = this.documentationComponent.translations || [];
      this.itemsTemplates = this.documentationComponent.templates || [];
      this.itemsSlots = this.documentationComponent.slots || [];
      this.htmlCode = this.documentationComponent.htmlCode;
      this.cssCode = this.documentationComponent.cssCode || ``;
      this.tsCode = this.documentationComponent.tsCode;
      this.classes = this.documentationComponent.classes || [];
      this.itemsServiceMethods = this.documentationComponent.service?.methods || []
      this.itemsStyles = this.documentationComponent.styles || []
    }
  }

  highlight() {
    setTimeout(() => { Prism.highlightAll(); });
  }

}
