import { Component, inject } from '@angular/core';
import {
  DdrTreeNode,
  DdrAction,
  DdrToastService,
  DdrTreeComponent,
  DdrTranslatePipe,
  DdrTranslateService
} from 'ddr-ng';
import { TreeData } from './bean/tree-data';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';

@Component({
  selector: 'tree-showcase',
  styleUrl: './tree-showcase.component.scss',
  templateUrl: './tree-showcase.component.html',
  imports: [
    BaseShowcaseComponent,
    DdrTreeComponent,
    DdrTranslatePipe
  ],
  providers: [
    DdrToastService
  ]
})
export class TreeShowcaseComponent {

  private ddrToastService: DdrToastService = inject(DdrToastService);
  private ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  public nodesEx1: DdrTreeNode<TreeData>[] = [
    {
      name: 'E1',
      data: {
        value: 'E1'
      },
      children: [
        {
          name: 'E1.1',
          data: {
            value: 'E1.1'
          },
          children: [
            {
              name: 'E1.1.1',
              data: {
                value: 'E1.1.1'
              },
            }
          ]
        },
        {
          name: 'E1.2',
          data: {
            value: 'E1.2'
          }
        }
      ]
    },
    {
      name: 'E2',
      data: {
        value: 'E2'
      },
      children: []
    }
  ];

  public nodesEx2: DdrTreeNode<TreeData>[] = [
    {
      name: 'E1',
      data: {
        value: 'E1'
      },
      children: [
        {
          name: 'E1.1',
          data: {
            value: 'E1.1'
          },
          children: [
            {
              name: 'E1.1.1',
              data: {
                value: 'E1.1.1'
              },
            }
          ]
        },
        {
          name: 'E1.2',
          data: {
            value: 'E1.2'
          }
        }
      ]
    },
    {
      name: 'E2',
      data: {
        value: 'E2'
      },
      children: []
    }
  ];

  public nodesEx3: DdrTreeNode<TreeData>[] = [
    {
      name: 'E1',
      icon: 'bi bi-bell',
      data: {
        value: 'E1'
      },
      children: [
        {
          name: 'E1.1',
          icon: 'bi bi-bell',
          data: {
            value: 'E1.1'
          },
          children: [
            {
              name: 'E1.1.1',
              icon: 'bi bi-bell',
              data: {
                value: 'E1.1.1'
              },
            }
          ]
        },
        {
          name: 'E1.2',
          icon: 'bi bi-bell',
          data: {
            value: 'E1.2'
          }
        }
      ]
    },
    {
      name: 'E2',
      icon: 'bi bi-bell',
      data: {
        value: 'E2'
      },
      children: []
    }
  ];

  public nodesEx4: DdrTreeNode<TreeData>[] = [
    {
      name: 'E1',
      data: {
        value: 'E1'
      },
      actions: [
        {
          label: 'tree.action.update',
          icon: 'bi bi-pencil',
          value: 'ACTION_1'
        },
        {
          label: 'tree.action.delete',
          icon: 'bi bi-trash3',
          value: 'ACTION_2'
        }
      ],
      children: [
        {
          name: 'E1.1',
          data: {
            value: 'E1.1'
          },
          actions: [
            {
              label: 'tree.action.update',
              icon: 'bi bi-pencil',
              value: 'ACTION_1'
            },
            {
              label: 'tree.action.delete',
              icon: 'bi bi-trash3',
              value: 'ACTION_2'
            }
          ],
          children: [
            {
              name: 'E1.1.1',
              data: {
                value: 'E1.1.1'
              },
              actions: [
                {
                  label: 'tree.action.update',
                  icon: 'bi bi-pencil',
                  value: 'ACTION_1'
                },
                {
                  label: 'tree.action.delete',
                  icon: 'bi bi-trash3',
                  value: 'ACTION_2'
                }
              ],
            }
          ]
        },
        {
          name: 'E1.2',
          data: {
            value: 'E1.2'
          },
          actions: [
            {
              label: 'tree.action.update',
              icon: 'bi bi-pencil',
              value: 'ACTION_1'
            },
            {
              label: 'tree.action.delete',
              icon: 'bi bi-trash3',
              value: 'ACTION_2'
            }
          ],
        }
      ]
    },
    {
      name: 'E2',
      data: {
        value: 'E2'
      },
      actions: [
        {
          label: 'tree.action.update',
          icon: 'bi bi-pencil',
          value: 'ACTION_1'
        },
        {
          label: 'tree.action.delete',
          icon: 'bi bi-trash3',
          value: 'ACTION_2'
        }
      ],
      children: []
    }
  ];

  public nodesEx5: DdrTreeNode<TreeData>[] = [
    {
      name: 'E1',
      data: {
        value: 'E1'
      },
      actions: [
        {
          label: 'tree.action.update',
          icon: 'bi bi-pencil',
          value: 'ACTION_1'
        },
        {
          label: 'tree.action.delete',
          icon: 'bi bi-trash3',
          value: 'ACTION_2'
        }
      ],
      children: [
        {
          name: 'E1.1',
          data: {
            value: 'E1.1'
          },
          actions: [
            {
              label: 'tree.action.update',
              icon: 'bi bi-pencil',
              value: 'ACTION_1'
            },
            {
              label: 'tree.action.delete',
              icon: 'bi bi-trash3',
              value: 'ACTION_2'
            }
          ],
          children: [
            {
              name: 'E1.1.1',
              data: {
                value: 'E1.1.1'
              },
              actions: [
                {
                  label: 'tree.action.update',
                  icon: 'bi bi-pencil',
                  value: 'ACTION_1'
                },
                {
                  label: 'tree.action.delete',
                  icon: 'bi bi-trash3',
                  value: 'ACTION_2'
                }
              ],
            }
          ]
        },
        {
          name: 'E1.2',
          data: {
            value: 'E1.2'
          },
          actions: [
            {
              label: 'tree.action.update',
              icon: 'bi bi-pencil',
              value: 'ACTION_1'
            },
            {
              label: 'tree.action.delete',
              icon: 'bi bi-trash3',
              value: 'ACTION_2'
            }
          ],
        }
      ]
    },
    {
      name: 'E2',
      data: {
        value: 'E2'
      },
      actions: [
        {
          label: 'tree.action.update',
          icon: 'bi bi-pencil',
          value: 'ACTION_1'
        },
        {
          label: 'tree.action.delete',
          icon: 'bi bi-trash3',
          value: 'ACTION_2'
        }
      ],
      children: []
    }
  ];

  public nodesEx6: DdrTreeNode<TreeData>[] = [
    {
      name: 'E1',
      data: {
        value: 'E1'
      },
      children: [
        {
          name: 'E1.1',
          data: {
            value: 'E1.1'
          },
          children: [
            {
              name: 'E1.1.1',
              data: {
                value: 'E1.1.1'
              }
            }
          ]
        },
        {
          name: 'E1.2',
          data: {
            value: 'E1.2'
          }
        }
      ]
    },
    {
      name: 'E2',
      data: {
        value: 'E2'
      },
      children: []
    }
  ];

  public nodesEx7: DdrTreeNode<TreeData>[] = [
    {
      name: 'E1',
      data: {
        value: 'E1'
      },
      children: [
        {
          name: 'E1.1',
          data: {
            value: 'E1.1'
          },
          children: [
            {
              name: 'E1.1.1',
              data: {
                value: 'E1.1.1'
              }
            }
          ]
        },
        {
          name: 'E1.2',
          data: {
            value: 'E1.2'
          }
        }
      ]
    },
    {
      name: 'E2',
      data: {
        value: 'E2'
      },
      children: []
    }
  ];

  public nodesEx8: DdrTreeNode<TreeData>[] = [
    {
      name: 'E1',
      data: {
        value: 'E1'
      },
      children: [
        {
          name: 'E1.1',
          data: {
            value: 'E1.1'
          },
          children: [
            {
              name: 'E1.1.1',
              data: {
                value: 'E1.1.1'
              }
            }
          ]
        },
        {
          name: 'E1.2',
          data: {
            value: 'E1.2'
          }
        }
      ]
    },
    {
      name: 'E2',
      data: {
        value: 'E2'
      },
      children: []
    }
  ];

  public nodesEx10: DdrTreeNode<TreeData>[] = [
    {
      name: 'E1',
      data: {
        value: 'E1'
      },
      children: [
        {
          name: 'E1.1',
          data: {
            value: 'E1.1'
          },
          children: [
            {
              name: 'E1.1.1',
              data: {
                value: 'E1.1.1'
              }
            }
          ]
        },
        {
          name: 'E1.2',
          data: {
            value: 'E1.2'
          }
        }
      ]
    },
    {
      name: 'E2',
      data: {
        value: 'E2'
      },
      children: []
    }
  ];

  public nodesEx11: DdrTreeNode<TreeData>[] = [
    {
      name: 'E1',
      data: {
        value: 'E1'
      },
      children: [
        {
          name: 'E1.1',
          data: {
            value: 'E1.1'
          },
          children: [
            {
              name: 'E1.1.1',
              data: {
                value: 'E1.1.1'
              }
            }
          ]
        },
        {
          name: 'E1.2',
          data: {
            value: 'E1.2'
          }
        }
      ]
    },
    {
      name: 'E2',
      data: {
        value: 'E2'
      },
      children: []
    }
  ];

  selectAction(action: DdrAction<TreeData>) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      JSON.stringify(action)
    );
  }

  clickNode(nodeData: TreeData) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      JSON.stringify(nodeData)
    );
  }

}
