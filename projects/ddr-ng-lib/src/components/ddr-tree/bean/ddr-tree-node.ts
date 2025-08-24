import { DdrAction } from "../../../common/ddr-action.model";

export interface DdrTreeNode<T> {
  name: string;
  icon?: string;
  open?: boolean;
  children?: DdrTreeNode<T>[];
  data?: T;
  actions?: DdrAction<T>[];
}