import { DdrTreeNode } from "ddr-ng";

export const MENU_ITEMS: DdrTreeNode<any>[] = [
  {
    "name": "menu.components",
    icon: "bi bi-columns-gap",
    children: [
      {
        "name": "menu.data",
        "icon": "bi bi-card-text",
        "children": [
          {
            "name": "Accordion",
            "data": {
              "route": "/ddr-accordion"
            }
          },
          {
            "name": "Badge",
            "data": {
              "route": "/ddr-badge-pill"
            }
          },
          {
            "name": "Detail",
            "data": {
              "route": "/ddr-detail"
            }
          },
          {
            "name": "Card",
            "data": {
              "route": "/ddr-card"
            }
          },
          {
            "name": "Modal",
            "data": {
              "route": "/ddr-modal"
            }
          },
          {
            "name": "No data",
            "data": {
              "route": "/ddr-no-data"
            }
          },
          {
            "name": "Steps",
            "data": {
              "route": "/ddr-steps"
            }
          },
          {
            "name": "Tabs",
            "data": {
              "route": "/ddr-tabs"
            }
          },
          {
            "name": "Table",
            "data": {
              "route": "/ddr-table"
            }
          },
          {
            "name": "Tree",
            "data": {
              "route": "/ddr-tree"
            }
          },
          {
            "name": "Progress bar",
            "data": {
              "route": "/ddr-progress-bar"
            }
          }
        ]
      },
      {
        name: "menu.buttons",
        icon: "bi bi-hand-index-thumb",
        children: [
          {
            "name": "Button",
            "data": {
              "route": "/ddr-button"
            }
          },
          {
            "name": "Button multiple",
            "data": {
              "route": "/ddr-button-multiple"
            }
          },
          {
            "name": "Button split",
            "data": {
              "route": "/ddr-button-split"
            }
          }
        ]
      },
      {
        name: "menu.form",
        icon: "bi bi-textarea-resize",
        children: [
          {
            "name": "Input",
            "data": {
              "route": "/ddr-input"
            }
          },
          {
            "name": "Input group",
            "data": {
              "route": "/ddr-input-group"
            }
          },
          {
            "name": "Input password",
            "data": {
              "route": "/ddr-input-password"
            }
          },
          {
            "name": "Input file",
            "data": {
              "route": "/ddr-input-file"
            }
          },
          {
            "name": "Chip",
            "data": {
              "route": "/ddr-chip"
            }
          },
          {
            "name": "Textarea",
            "data": {
              "route": "/ddr-textarea"
            }
          },
          {
            "name": "Radio",
            "data": {
              "route": "/ddr-radio"
            }
          },
          {
            "name": "Checkbox",
            "data": {
              "route": "/ddr-checkbox"
            }
          },
          {
            "name": "Checkbox binary",
            "data": {
              "route": "/ddr-checkbox-binary"
            }
          },
          {
            "name": "Dropdown",
            "data": {
              "route": "/ddr-dropdown"
            }
          },
          {
            "name": "Dropdown multiple",
            "data": {
              "route": "/ddr-dropdown-multiple"
            }
          },
          {
            "name": "Login",
            "data": {
              "route": "/ddr-login"
            }
          },
          {
            "name": "Toggle",
            "data": {
              "route": "/ddr-toggle"
            }
          }
        ]
      },
    ]
  },
  {
    "name": "menu.services",
    "icon": "bi bi-box-seam",
    "children": [
      {
        "name": "Spinner",
        "data": {
          "route": "/ddr-spinner-service"
        }
      },
      {
        "name": "Toast",
        "data": {
          "route": "/ddr-toast-service"
        }
      },
      {
        "name": "Translate",
        "data": {
          "route": "/ddr-translate-service"
        }
      }
    ]
  },
  {
    name: 'menu.pipes',
    icon: 'bi bi-pause',
    children: [
      {
        name: "Loop number",
        data: {
          route: "/ddr-loop-number"
        }
      },
      {
        name: "Nested property",
        data: {
          route: "/ddr-nested-property"
        }
      },
      {
        name: "Safe",
        data: {
          route: "/ddr-safe"
        }
      },
      {
        "name": "Translate pipe",
        "data": {
          "route": "/ddr-translate-pipe"
        }
      }
    ]
  },
  {
    "name": "menu.directives",
    "icon": "bi bi-puzzle",
    "children": [
      {
        "name": "Load iframe",
        "data": {
          "route": "/ddr-load-iframe"
        }
      },
      {
        "name": "Click Outside",
        "data": {
          "route": "/ddr-click-outside"
        }
      },
      {
        "name": "Drag and drop",
        "data": {
          "route": "/ddr-drag-and-drop"
        }
      },
      {
        "name": "Skeleton",
        "data": {
          "route": "/ddr-skeleton"
        }
      },
      {
        "name": "Badge notification",
        "data": {
          "route": "/ddr-badge-notification"
        }
      },
      {
        "name": "Tooltip",
        "data": {
          "route": "/ddr-tooltip"
        }
      },
      {
        "name": "Clipboard",
        "data": {
          "route": "/ddr-clipboard"
        }
      },
      {
        "name": "Spinner block",
        "data": {
          "route": "/ddr-spinner-block"
        }
      }
    ]
  }
]

