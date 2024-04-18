interface Tab {
    header: string;
    content: string;
    disabled?: boolean;
}

export interface DynamicTabView {
    tabs: Tab[];
}