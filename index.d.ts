interface TableColumn {
    prop: string;
    label: string;
    align?: 'left' | 'center' | 'right';
    width?: number | string;
    formatter?: (row: any, column: TableColumn, cellValue: any, index: number) => string;
}
interface PrintOptions {
    title?: string;
    showHeader?: boolean;
    showFooter?: boolean;
    pageSize?: 'A4' | 'A3' | 'A5' | 'Letter';
    orientation?: 'portrait' | 'landscape';
    margins?: string;
    fontSize?: string;
    headerStyle?: {
        backgroundColor?: string;
        color?: string;
        fontWeight?: string;
    };
    customStyles?: string;
    watermark?: string;
    logo?: string;
}
interface PrintResult {
    success: boolean;
    message?: string;
}
/**
 * 高级表格打印工具类
 */
declare class TablePrintUtil {
    private options;
    constructor(options?: PrintOptions);
    /**
     * 打印表格
     */
    printTable(data: any[], columns: TableColumn[], customOptions?: Partial<PrintOptions>): Promise<PrintResult>;
    /**
     * 预览表格
     */
    previewTable(data: any[], columns: TableColumn[], options?: Partial<PrintOptions>): void;
    /**
     * 导出为HTML文件
     */
    exportToHTML(data: any[], columns: TableColumn[], filename?: string, options?: Partial<PrintOptions>): void;
    private generateAdvancedHTML;
    private generatePrintStyles;
    private generateWatermarkStyle;
    private generateHeader;
    private generateTableContent;
    private generateFooter;
    private generatePrintScript;
    private executePrint;
    private getNestedValue;
}
/**
 * Vue 组合式函数
 */
declare function useTablePrint(options?: PrintOptions): {
    printTable: (data: any[], columns: TableColumn[], customOptions?: Partial<PrintOptions>) => Promise<PrintResult>;
    previewTable: (data: any[], columns: TableColumn[], customOptions?: Partial<PrintOptions>) => void;
    exportToHTML: (data: any[], columns: TableColumn[], filename?: string, customOptions?: Partial<PrintOptions>) => void;
    printUtil: TablePrintUtil;
};

export { TablePrintUtil, TablePrintUtil as default, useTablePrint };
export type { PrintOptions, PrintResult, TableColumn };
