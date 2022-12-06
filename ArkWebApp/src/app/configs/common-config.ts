import { AdaptableButton, DashboardOptions, ExportOptions } from "@adaptabletools/adaptable-angular-aggrid";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { ExcelStyle, Module } from "@ag-grid-community/core";
import { ClipboardModule } from "@ag-grid-enterprise/clipboard";
import { ColumnsToolPanelModule } from "@ag-grid-enterprise/column-tool-panel";
import { ExcelExportModule } from "@ag-grid-enterprise/excel-export";
import { FiltersToolPanelModule } from "@ag-grid-enterprise/filter-tool-panel";
import { MenuModule } from "@ag-grid-enterprise/menu";
import { RangeSelectionModule } from "@ag-grid-enterprise/range-selection";
import { RowGroupingModule } from "@ag-grid-enterprise/row-grouping";
import { SetFilterModule } from "@ag-grid-enterprise/set-filter";
import { SideBarModule } from "@ag-grid-enterprise/side-bar";
import { AdaptableModuleButtons } from "@adaptabletools/adaptable/src/PredefinedConfig/Common/Types";

export class CommonConfig{

    public static AG_GRID_LICENSE_KEY: string = ``

    public static ADAPTABLE_LICENSE_KEY: string = ``

    public static GENERAL_EXPORT_OPTIONS: ExportOptions = {
        // this is only necessary if we want/need a different date format than the one displayed in the UI
        // by default it will use the 'formattedValue' of each specific column
        // exportDateFormat: 'yyyy/MM/dd',
        exportFormatType: 'formattedValue'
    }

    // public static GENERAL_EXCEL_STYLES: ExcelStyle[] = [{
    //     id: 'dateUK',
    //     dataType: 'DateTime',
    //     numberFormat: {
    //       format: 'yyyy/MM/dd'
    //     }
    //   }]

    public static AG_GRID_MODULES: Module[] = [
        ClientSideRowModelModule,
        SetFilterModule,
        ColumnsToolPanelModule,
        MenuModule,
        ExcelExportModule,
        FiltersToolPanelModule,
        ClipboardModule,
        SideBarModule,
        RangeSelectionModule,
        RowGroupingModule
      ];

    public static DASHBOARD_MODULE_BUTTONS: AdaptableModuleButtons = ['SettingsPanel', 'TeamSharing', 'Export', 'Layout', 'ConditionalStyle', 'Filter']
}
