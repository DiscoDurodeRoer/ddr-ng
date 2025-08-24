import { DdrTableItem } from "ddr-ng"

export interface DocumentationInput {
  name: string
  component?: string
  description: string
  type: string
  required: boolean
  default: string
  values?: string
}

export interface DocumentationOutput {
  name: string
  component?: string
  description: string
  type: string
}

export interface DocumentationTranslation {
  name: string
  description: string
}

export interface DocumentationService {
  name: string
  methods: DdrTableItem<DocumentationServiceMethod>[]
}

export interface DocumentationServiceMethod {
  name: string
  description: string
}

export interface DocumentationTemplate {
  name: string
  component?: string
  description: string
}

export interface DocumentationSlot {
  selector: string
  description: string
}

export interface DocumentationClass {
  htmlCode: string
}

export interface DocumentationStyle {
  class: string
  description: string
}

export interface Documentation {
  htmlCode: string
  cssCode?: string
  tsCode: string
  classes?: DocumentationClass[]
  inputs?: DdrTableItem<DocumentationInput>[]
  outputs?: DdrTableItem<DocumentationOutput>[]
  translations?: DdrTableItem<DocumentationTranslation>[]
  templates?: DdrTableItem<DocumentationTemplate>[]
  slots?: DdrTableItem<DocumentationSlot>[]
  service?: DocumentationService
  styles?: DdrTableItem<DocumentationStyle>[]
}

export const CLASSES: Record<string, DocumentationClass> = {
  'DdrTableCol': {
    htmlCode: `
export interface DdrTableCol {
    property: string;
    label: string;
    tooltip?: string;
    modeSort?: string;
    canSort?: boolean;
}`
  },
  'DdrTableItem': {
    htmlCode: `
export interface DdrTableItem<T> {
    item: T;
    actions?: DdrAction<T>[];
    index?: number;
    selected?: boolean;
}`
  },
  'DdrAction': {
    htmlCode: `
export interface DdrAction<T> {
  label: string;
  value?: string;
  icon?: string;
  img?: string;
  item?: T;
  index?: number;
}`
  },
  'DdrTreeNode': {
    htmlCode: `
export interface DdrTreeNode<T> {
  name: string;
  icon?: string;
  open?: boolean;
  children?: DdrTreeNode<T>[];
  data?: T;
  actions?: DdrAction<T>[];
}`
  },
  'DdrButton': {
    htmlCode: `
export interface DdrButton {
    text?: string;
    icon?: string;
    value: string;
    tooltipText?: string;
}`
  },
  'DdrFileHandle': {
    htmlCode: `
import { SafeUrl } from "@angular/platform-browser";

export interface DdrFileHandle {
    file: File,
    url: SafeUrl
}`
  },
  'DdrSelectItem': {
    htmlCode: `
export interface DdrSelectItem<T> {
    label: string;
    value: T;
    selected?: boolean;
}`
  },
  'ProgrammingLanguage': {
    htmlCode: `
export interface ProgrammingLanguage {
  name: string;
}`
  },
  'PersonTable': {
    htmlCode: `
export interface Person {
  name: string;
  surname: string;
  age: number;
  weight: number
  documentation?: { nif: string }
}`
  },
  'PersonStep': {
    htmlCode: `
export interface Person {
  name: string;
  age: number;
}`
  },
  'DdrAuth': {
    htmlCode: `
export interface DdrAuth {
  username: string;
  password: string;
}`
  },
  'DdrLoopNumberParams': {
    htmlCode: `
export interface DdrLoopNumberParams {
    start?: number;
    includeLast?: boolean;
    step?: number;
    reverse?: boolean;
}`
  }
}