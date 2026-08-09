import { DdrAction } from "ddr-ng/models";

export interface DdrTreeNode<T> {
  name: string;
  icon?: string;
  open?: boolean;
  children?: DdrTreeNode<T>[];
  data?: T;
  actions?: DdrAction<T>[];
}