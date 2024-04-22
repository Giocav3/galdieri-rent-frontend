interface Tab {
    header: string;
    path: string;
    disabled?: boolean;
}

export interface DynamicTabView {
    tabs: Tab[];
}