export interface DdrAction<T> {
    label: string;
    value?: string;
    icon?: string;
    img?: string;
    item?: T;
    index?: number;
}
