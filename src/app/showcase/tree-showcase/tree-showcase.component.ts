import { Component } from '@angular/core';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { DdrTranslatePipe } from 'ddr-ng/translate';
import { TreeShowcase1Component } from './showcases/tree-showcase-1/tree-showcase-1.component';
import { TreeShowcase10Component } from './showcases/tree-showcase-10/tree-showcase-10.component';
import { TreeShowcase11Component } from './showcases/tree-showcase-11/tree-showcase-11.component';
import { TreeShowcase2Component } from './showcases/tree-showcase-2/tree-showcase-2.component';
import { TreeShowcase3Component } from './showcases/tree-showcase-3/tree-showcase-3.component';
import { TreeShowcase4Component } from './showcases/tree-showcase-4/tree-showcase-4.component';
import { TreeShowcase5Component } from './showcases/tree-showcase-5/tree-showcase-5.component';
import { TreeShowcase6Component } from './showcases/tree-showcase-6/tree-showcase-6.component';
import { TreeShowcase7Component } from './showcases/tree-showcase-7/tree-showcase-7.component';
import { TreeShowcase8Component } from './showcases/tree-showcase-8/tree-showcase-8.component';
import { TreeShowcase9Component } from './showcases/tree-showcase-9/tree-showcase-9.component';
import { CLASSES, Documentation } from '../base-showcase/bean/documentation';

@Component({
  selector: 'tree-showcase',
  templateUrl: './tree-showcase.component.html',
  imports: [
    BaseShowcaseComponent,
    TreeShowcase1Component,
    TreeShowcase2Component,
    TreeShowcase3Component,
    TreeShowcase4Component,
    TreeShowcase5Component,
    TreeShowcase6Component,
    TreeShowcase7Component,
    TreeShowcase8Component,
    TreeShowcase9Component,
    TreeShowcase10Component,
    TreeShowcase11Component,
    DdrTranslatePipe
  ]
})
export class TreeShowcaseComponent {

  public documentation: Documentation = {
    examples: [
      {
        htmlCode: `<ddr-tree 
      [nodes]="nodes()" />`,
        tsCode: `import {
    Component,
    Signal,
    signal
  } from '@angular/core';
  import {
    DdrTreeComponent,
    DdrTreeNode
  } from 'ddr-ng/components/tree';
  import { TreeData } from './bean/tree-data';
  
  @Component({
    selector: 'tree-showcase-1',
    templateUrl: './tree-showcase-1.component.html',
    imports: [
      DdrTreeComponent
    ]
  })
  export class TreeShowcase1Component {
  
    public nodes: Signal<DdrTreeNode<TreeData>[]> = signal<DdrTreeNode<TreeData>[]>([
      {
        name: 'E1',
        data: {
          value: 'E1',
        },
        children: [
          {
            name: 'E1.1',
            data: {
              value: 'E1.1',
            },
            children: [
              {
                name: 'E1.1.1',
                data: {
                  value: 'E1.1.1',
                },
              },
            ],
          },
          {
            name: 'E1.2',
            data: {
              value: 'E1.2',
            },
          },
        ],
      },
      {
        name: 'E2',
        data: {
          value: 'E2',
        },
        children: [],
      },
    ]);
  }
  `,
        classes: [
          CLASSES['DdrTreeNode'],
          CLASSES['TreeData']
        ]
      },
      {
        htmlCode: `<ddr-tree 
      [nodes]="nodes()" 
      [border]="true" />`,
        tsCode: `import {
    Component,
    Signal,
    signal
  } from '@angular/core';
  import {
    DdrTreeComponent,
    DdrTreeNode
  } from 'ddr-ng/components/tree';
  import { TreeData } from './bean/tree-data';
  
  @Component({
    selector: 'tree-showcase-2',
    templateUrl: './tree-showcase-2.component.html',
    imports: [
      DdrTreeComponent
    ]
  })
  export class TreeShowcase2Component {
  
    public nodes: Signal<DdrTreeNode<TreeData>[]> = signal<DdrTreeNode<TreeData>[]>([
      {
        name: 'E1',
        data: {
          value: 'E1',
        },
        children: [
          {
            name: 'E1.1',
            data: {
              value: 'E1.1',
            },
            children: [
              {
                name: 'E1.1.1',
                data: {
                  value: 'E1.1.1',
                },
              },
            ],
          },
          {
            name: 'E1.2',
            data: {
              value: 'E1.2',
            },
          },
        ],
      },
      {
        name: 'E2',
        data: {
          value: 'E2',
        },
        children: [],
      },
    ]);
  }
  `,
        classes: [
          CLASSES['DdrTreeNode'],
          CLASSES['TreeData']
        ]
      },
      {
        htmlCode: `<ddr-tree
      [nodes]="nodes()" />`,
        tsCode: `import {
    Component,
    Signal,
    signal
  } from '@angular/core';
  import {
    DdrTreeComponent,
    DdrTreeNode
  } from 'ddr-ng/components/tree';
  import { TreeData } from './bean/tree-data';
  
  @Component({
    selector: 'tree-showcase-3',
    templateUrl: './tree-showcase-3.component.html',
    imports: [
      DdrTreeComponent
    ]
  })
  export class TreeShowcase3Component {
  
    public nodes: Signal<DdrTreeNode<TreeData>[]> = signal<DdrTreeNode<TreeData>[]>([
      {
        name: 'E1',
        icon: 'bi bi-bell',
        data: {
          value: 'E1',
        },
        children: [
          {
            name: 'E1.1',
            icon: 'bi bi-bell',
            data: {
              value: 'E1.1',
            },
            children: [
              {
                name: 'E1.1.1',
                icon: 'bi bi-bell',
                data: {
                  value: 'E1.1.1',
                },
              },
            ],
          },
          {
            name: 'E1.2',
            icon: 'bi bi-bell',
            data: {
              value: 'E1.2',
            },
          },
        ],
      },
      {
        name: 'E2',
        icon: 'bi bi-bell',
        data: {
          value: 'E2',
        },
        children: [],
      },
    ]);
  }
  `,
        classes: [
          CLASSES['DdrTreeNode'],
          CLASSES['TreeData']
        ]
      },
      {
        htmlCode: `<ddr-tree
      [nodes]="nodes()" 
      (selectAction)="selectAction($event)" />`,
        tsCode: `import {
    Component,
    inject,
    Signal,
    signal
  } from '@angular/core';
  import {
    DdrTreeComponent,
    DdrTreeNode
  } from 'ddr-ng/components/tree';
  import { DdrToastService } from 'ddr-ng/toast';
  import { DdrTranslateService } from 'ddr-ng/translate';
  import { DdrAction } from 'ddr-ng/models';
  import { TreeData } from './bean/tree-data';
  
  @Component({
    selector: 'tree-showcase-4',
    templateUrl: './tree-showcase-4.component.html',
    imports: [
      DdrTreeComponent
    ],
    providers: [
      DdrToastService
    ]
  })
  export class TreeShowcase4Component {
  
    private ddrToastService: DdrToastService = inject(DdrToastService);
    private ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);
  
    public nodes: Signal<DdrTreeNode<TreeData>[]> = signal<DdrTreeNode<TreeData>[]>([
      {
        name: 'E1',
        data: {
          value: 'E1',
        },
        actions: [
          {
            label: 'tree.action.update',
            icon: 'bi bi-pencil',
            value: 'ACTION_1',
          },
          {
            label: 'tree.action.delete',
            icon: 'bi bi-trash3',
            value: 'ACTION_2',
          },
        ],
        children: [
          {
            name: 'E1.1',
            data: {
              value: 'E1.1',
            },
            actions: [
              {
                label: 'tree.action.update',
                icon: 'bi bi-pencil',
                value: 'ACTION_1',
              },
              {
                label: 'tree.action.delete',
                icon: 'bi bi-trash3',
                value: 'ACTION_2',
              },
            ],
            children: [
              {
                name: 'E1.1.1',
                data: {
                  value: 'E1.1.1',
                },
                actions: [
                  {
                    label: 'tree.action.update',
                    icon: 'bi bi-pencil',
                    value: 'ACTION_1',
                  },
                  {
                    label: 'tree.action.delete',
                    icon: 'bi bi-trash3',
                    value: 'ACTION_2',
                  },
                ],
              },
            ],
          },
          {
            name: 'E1.2',
            data: {
              value: 'E1.2',
            },
            actions: [
              {
                label: 'tree.action.update',
                icon: 'bi bi-pencil',
                value: 'ACTION_1',
              },
              {
                label: 'tree.action.delete',
                icon: 'bi bi-trash3',
                value: 'ACTION_2',
              },
            ],
          },
        ],
      },
      {
        name: 'E2',
        data: {
          value: 'E2',
        },
        actions: [
          {
            label: 'tree.action.update',
            icon: 'bi bi-pencil',
            value: 'ACTION_1',
          },
          {
            label: 'tree.action.delete',
            icon: 'bi bi-trash3',
            value: 'ACTION_2',
          },
        ],
        children: [],
      },
    ]);
  
    selectAction(action: DdrAction<TreeData>) {
      this.ddrToastService.addSuccessMessage(
        this.ddrTranslateService.getTranslate('success'),
        JSON.stringify(action),
      );
    }
  }
  `,
        classes: [
          CLASSES['DdrTreeNode'],
          CLASSES['TreeData']
        ]
      },
      {
        htmlCode: `<ddr-tree 
      [nodes]="nodes()" 
      [actionsOnlyLeafs]="true"
      (selectAction)="selectAction($event)" />`,
        tsCode: `import {
    Component,
    inject,
    Signal,
    signal
  } from '@angular/core';
  import {
    DdrTreeComponent,
    DdrTreeNode
  } from 'ddr-ng/components/tree';
  import { DdrAction } from 'ddr-ng/models';
  import { DdrToastService } from 'ddr-ng/toast';
  import { DdrTranslateService } from 'ddr-ng/translate';
  import { TreeData } from './bean/tree-data';
  
  @Component({
    selector: 'tree-showcase-5',
    templateUrl: './tree-showcase-5.component.html',
    imports: [
      DdrTreeComponent
    ],
    providers: [
      DdrToastService
    ]
  })
  export class TreeShowcase5Component {
  
    private ddrToastService: DdrToastService = inject(DdrToastService);
    private ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);
  
    public nodes: Signal<DdrTreeNode<TreeData>[]> = signal<DdrTreeNode<TreeData>[]>([
      {
        name: 'E1',
        data: {
          value: 'E1',
        },
        actions: [
          {
            label: 'tree.action.update',
            icon: 'bi bi-pencil',
            value: 'ACTION_1',
          },
          {
            label: 'tree.action.delete',
            icon: 'bi bi-trash3',
            value: 'ACTION_2',
          },
        ],
        children: [
          {
            name: 'E1.1',
            data: {
              value: 'E1.1',
            },
            actions: [
              {
                label: 'tree.action.update',
                icon: 'bi bi-pencil',
                value: 'ACTION_1',
              },
              {
                label: 'tree.action.delete',
                icon: 'bi bi-trash3',
                value: 'ACTION_2',
              },
            ],
            children: [
              {
                name: 'E1.1.1',
                data: {
                  value: 'E1.1.1',
                },
                actions: [
                  {
                    label: 'tree.action.update',
                    icon: 'bi bi-pencil',
                    value: 'ACTION_1',
                  },
                  {
                    label: 'tree.action.delete',
                    icon: 'bi bi-trash3',
                    value: 'ACTION_2',
                  },
                ],
              },
            ],
          },
          {
            name: 'E1.2',
            data: {
              value: 'E1.2',
            },
            actions: [
              {
                label: 'tree.action.update',
                icon: 'bi bi-pencil',
                value: 'ACTION_1',
              },
              {
                label: 'tree.action.delete',
                icon: 'bi bi-trash3',
                value: 'ACTION_2',
              },
            ],
          },
        ],
      },
      {
        name: 'E2',
        data: {
          value: 'E2',
        },
        actions: [
          {
            label: 'tree.action.update',
            icon: 'bi bi-pencil',
            value: 'ACTION_1',
          },
          {
            label: 'tree.action.delete',
            icon: 'bi bi-trash3',
            value: 'ACTION_2',
          },
        ],
        children: [],
      },
    ]);
  
    selectAction(action: DdrAction<TreeData>) {
      this.ddrToastService.addSuccessMessage(
        this.ddrTranslateService.getTranslate('success'),
        JSON.stringify(action),
      );
    }
  }
  `,
        classes: [
          CLASSES['DdrTreeNode'],
          CLASSES['TreeData']
        ]
      },
      {
        htmlCode: ` <ddr-tree 
      [nodes]="nodes()" >
  
          <ng-template #templateNode let-item="item">
              <div class="mt-2">{{'tree.value' | ddrTranslate}}: {{ item.value }}</div>
          </ng-template>
  
  </ddr-tree>`,
        tsCode: `import {
    Component,
    Signal,
    signal
  } from '@angular/core';
  import {
    DdrTreeComponent,
    DdrTreeNode
  } from 'ddr-ng/components/tree';
  import { DdrTranslatePipe } from 'ddr-ng/translate';
  import { TreeData } from './bean/tree-data';
  
  @Component({
    selector: 'tree-showcase-6',
    templateUrl: './tree-showcase-6.component.html',
    imports: [
      DdrTreeComponent,
      DdrTranslatePipe
    ]
  })
  export class TreeShowcase6Component {
  
    public nodes: Signal<DdrTreeNode<TreeData>[]> = signal<DdrTreeNode<TreeData>[]>([
      {
        name: 'E1',
        data: {
          value: 'E1',
        },
        children: [
          {
            name: 'E1.1',
            data: {
              value: 'E1.1',
            },
            children: [
              {
                name: 'E1.1.1',
                data: {
                  value: 'E1.1.1',
                },
              },
            ],
          },
          {
            name: 'E1.2',
            data: {
              value: 'E1.2',
            },
          },
        ],
      },
      {
        name: 'E2',
        data: {
          value: 'E2',
        },
        children: [],
      },
    ]);
  }
  `,
        classes: [
          CLASSES['DdrTreeNode'],
          CLASSES['TreeData']
        ]
      },
      {
        htmlCode: `<ddr-tree 
      [nodes]="nodes()"
      (clickNode)="clickNode($event)" />`,
        tsCode: `import {
    Component,
    inject,
    Signal,
    signal
  } from '@angular/core';
  import {
    DdrTreeComponent,
    DdrTreeNode
  } from 'ddr-ng/components/tree';
  import { DdrToastService } from 'ddr-ng/toast';
  import { DdrTranslateService } from 'ddr-ng/translate';
  import { TreeData } from './bean/tree-data';
  
  @Component({
    selector: 'tree-showcase-7',
    templateUrl: './tree-showcase-7.component.html',
    imports: [
      DdrTreeComponent
    ],
    providers: [
      DdrToastService
    ]
  })
  export class TreeShowcase7Component {
  
    private ddrToastService: DdrToastService = inject(DdrToastService);
    private ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);
  
    public nodes: Signal<DdrTreeNode<TreeData>[]> = signal<DdrTreeNode<TreeData>[]>([
      {
        name: 'E1',
        data: {
          value: 'E1',
        },
        children: [
          {
            name: 'E1.1',
            data: {
              value: 'E1.1',
            },
            children: [
              {
                name: 'E1.1.1',
                data: {
                  value: 'E1.1.1',
                },
              },
            ],
          },
          {
            name: 'E1.2',
            data: {
              value: 'E1.2',
            },
          },
        ],
      },
      {
        name: 'E2',
        data: {
          value: 'E2',
        },
        children: [],
      },
    ]);
  
    clickNode(nodeData: TreeData) {
      this.ddrToastService.addSuccessMessage(
        this.ddrTranslateService.getTranslate('success'),
        JSON.stringify(nodeData),
      );
    }
  }
  `,
        classes: [
          CLASSES['DdrTreeNode'],
          CLASSES['TreeData']
        ]
      },
      {
        htmlCode: `<ddr-tree 
      [nodes]="nodes()"
      [canClick]="false"
      (clickNode)="clickNode($event)" />`,
        tsCode: `import {
    Component,
    inject,
    Signal,
    signal
  } from '@angular/core';
  import {
    DdrTreeComponent,
    DdrTreeNode
  } from 'ddr-ng/components/tree';
  import { DdrToastService } from 'ddr-ng/toast';
  import { TreeData } from './bean/tree-data';
  import { DdrTranslateService } from 'ddr-ng/translate';
  
  @Component({
    selector: 'tree-showcase-8',
    templateUrl: './tree-showcase-8.component.html',
    imports: [
      DdrTreeComponent
    ],
    providers: [
      DdrToastService
    ]
  })
  export class TreeShowcase8Component {
  
    private ddrToastService: DdrToastService = inject(DdrToastService);
    private ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);
  
    public nodes: Signal<DdrTreeNode<TreeData>[]> = signal<DdrTreeNode<TreeData>[]>([
      {
        name: 'E1',
        data: {
          value: 'E1',
        },
        children: [
          {
            name: 'E1.1',
            data: {
              value: 'E1.1',
            },
            children: [
              {
                name: 'E1.1.1',
                data: {
                  value: 'E1.1.1',
                },
              },
            ],
          },
          {
            name: 'E1.2',
            data: {
              value: 'E1.2',
            },
          },
        ],
      },
      {
        name: 'E2',
        data: {
          value: 'E2',
        },
        children: [],
      },
    ]);
  
    clickNode(nodeData: TreeData) {
      this.ddrToastService.addSuccessMessage(
        this.ddrTranslateService.getTranslate('success'),
        JSON.stringify(nodeData),
      );
    }
  }
  `,
        classes: [
          CLASSES['DdrTreeNode'],
          CLASSES['TreeData']
        ]
      },
      {
        htmlCode: `<ddr-tree 
      [nodes]="[]"
      [labelNoData]="'tree.empty' | ddrTranslate" />`,
        tsCode: `import { Component } from '@angular/core';
  import { DdrTreeComponent } from 'ddr-ng/components/tree';
  import { DdrTranslatePipe } from 'ddr-ng/translate';
  
  @Component({
    selector: 'tree-showcase-9',
    templateUrl: './tree-showcase-9.component.html',
    imports: [
      DdrTreeComponent,
      DdrTranslatePipe
    ]
  })
  export class TreeShowcase9Component {}
  `
      },
      {
        htmlCode: `<div class="background-test-transparent">
      <ddr-tree 
          [nodes]="nodes()"
          [transparent]="true" />
  </div>
  `,
        tsCode: `import {
    Component,
    Signal,
    signal
  } from '@angular/core';
  import {
    DdrTreeComponent,
    DdrTreeNode
  } from 'ddr-ng/components/tree';
  import { TreeData } from './bean/tree-data';
  
  @Component({
    selector: 'tree-showcase-10',
    templateUrl: './tree-showcase-10.component.html',
    styleUrl: './tree-showcase-10.component.scss',
    imports: [
      DdrTreeComponent
    ]
  })
  export class TreeShowcase10Component {
  
    public nodes: Signal<DdrTreeNode<TreeData>[]> = signal<DdrTreeNode<TreeData>[]>([
      {
        name: 'E1',
        data: {
          value: 'E1',
        },
        children: [
          {
            name: 'E1.1',
            data: {
              value: 'E1.1',
            },
            children: [
              {
                name: 'E1.1.1',
                data: {
                  value: 'E1.1.1',
                },
              },
            ],
          },
          {
            name: 'E1.2',
            data: {
              value: 'E1.2',
            },
          },
        ],
      },
      {
        name: 'E2',
        data: {
          value: 'E2',
        },
        children: [],
      },
    ]);
  }
  `,
        cssCode: `.background-test-transparent {
      background: turquoise;
  }`,
        classes: [
          CLASSES['DdrTreeNode'],
          CLASSES['TreeData']
        ]
      },
      {
        htmlCode: `<ddr-tree 
      [nodes]="nodes()"
      [showIconArrow]="false" />`,
        tsCode: `import {
    Component,
    Signal,
    signal
  } from '@angular/core';
  import {
    DdrTreeComponent,
    DdrTreeNode
  } from 'ddr-ng/components/tree';
  import { TreeData } from './bean/tree-data';
  
  @Component({
    selector: 'tree-showcase-11',
    templateUrl: './tree-showcase-11.component.html',
    imports: [
      DdrTreeComponent
    ]
  })
  export class TreeShowcase11Component {
  
    public nodes: Signal<DdrTreeNode<TreeData>[]> = signal<DdrTreeNode<TreeData>[]>([
      {
        name: 'E1',
        data: {
          value: 'E1',
        },
        children: [
          {
            name: 'E1.1',
            data: {
              value: 'E1.1',
            },
            children: [
              {
                name: 'E1.1.1',
                data: {
                  value: 'E1.1.1',
                },
              },
            ],
          },
          {
            name: 'E1.2',
            data: {
              value: 'E1.2',
            },
          },
        ],
      },
      {
        name: 'E2',
        data: {
          value: 'E2',
        },
        children: [],
      },
    ]);
  }
  `,
        classes: [
          CLASSES['DdrTreeNode'],
          CLASSES['TreeData']
        ]
      }
    ],
    inputs: [
      {
        item: {
          name: 'nodes',
          description: 'tree.input.nodes',
          required: false,
          default: '[]',
          type: 'DdrTreeNode<T>[]'
        }
      },
      {
        item: {
          name: 'border',
          description: 'tree.input.border',
          required: false,
          default: 'false',
          type: 'boolean'
        }
      },
      {
        item: {
          name: 'actionsOnlyLeafs',
          description: 'tree.input.actionsonlyleafs',
          required: false,
          default: 'false',
          type: 'boolean'
        }
      },
      {
        item: {
          name: 'open',
          description: 'tree.input.open',
          required: false,
          default: 'false',
          type: 'boolean'
        }
      },
      {
        item: {
          name: 'canClick',
          description: 'tree.input.canclick',
          required: false,
          default: 'false',
          type: 'boolean'
        }
      },
      {
        item: {
          name: 'transparent',
          description: 'tree.input.transparent',
          required: false,
          default: 'false',
          type: 'boolean'
        }
      },
      {
        item: {
          name: 'showIconArrow',
          description: 'tree.input.showiconarrow',
          required: false,
          default: 'true',
          type: 'boolean'
        }
      }
    ],
    outputs: [
      {
        item: {
          name: 'selectAction',
          description: 'tree.output.selectaction',
          type: 'T'
        }
      },
      {
        item: {
          name: 'clickNode',
          description: 'tree.output.clicknode',
          type: 'T'
        }
      }
    ],
    templates: [
      {
        item: {
          name: 'templateNode',
          description: 'tree.template.templatenode'
        }
      }
    ],
    translations: [
      {
        item: {
          name: 'tree.no.data',
          description: 'tree.translation.no.data'
        }
      }
    ],
    styles: [
      {
        item: {
          class: 'ddr-tree',
          description: 'tree.style.tree'
        }
      },
      {
        item: {
          class: 'ddr-tree--transparent',
          description: 'tree.style.tree.transparent'
        }
      },
      {
        item: {
          class: 'ddr-tree__no-data',
          description: 'tree.style.no.data'
        }
      },
      {
        item: {
          class: 'ddr-tree__container',
          description: 'tree.style.container'
        }
      },
      {
        item: {
          class: 'ddr-tree__container__node',
          description: 'tree.style.container.node'
        }
      },
      {
        item: {
          class: 'ddr-tree__container__node__content',
          description: 'tree.style.container.node.content'
        }
      },
      {
        item: {
          class: 'ddr-tree__container__node__content__icon',
          description: 'tree.style.container.node.content.icon'
        }
      },
      {
        item: {
          class: 'ddr-tree__container__node__content__text',
          description: 'tree.style.container.node.content.text'
        }
      },
      {
        item: {
          class: 'ddr-tree__container__node__content__custom',
          description: 'tree.style.container.node.content.custom'
        }
      },
      {
        item: {
          class: 'ddr-tree__container__node__actions',
          description: 'tree.style.container.node.actions'
        }
      },
    ]
  }

}
