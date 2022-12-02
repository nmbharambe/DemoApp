import {
  ActionColumnContext,
  AdaptableButton,
  AdaptableOptions,
} from '@adaptabletools/adaptable-angular-aggrid';
import { ColDef, GridOptions, Module } from '@ag-grid-community/core';
import { Component } from '@angular/core';
import { CommonConfig } from './configs/common-config';
import { dateFormatter, dateTimeFormatter } from './shared/functions/formatter';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    '../app/shared/styles/grid-page.layout.scss',
    './app.component.scss',
  ],
})
export class AppComponent {
  constructor() {}

  rowData = [];
  modules: Module[] = CommonConfig.AG_GRID_MODULES;
  gridOptions: GridOptions;
  adaptableOptions: AdaptableOptions;
  columnDefs: ColDef[] = [
    {
      headerName: 'Position Id',
      field: 'positionId',
      hide: true,
      type: 'abColDefNumber',
    },
    {
      headerName: 'Asset Id',
      field: 'assetId',
      hide: true,
      type: 'abColDefNumber',
    },
    {
      headerName: 'Issuer Short Name ',
      field: 'issuerShortName',
      enableValue: true,
      type: 'abColDefString',
    },
    {
      headerName: 'Asset',
      field: 'asset',
      enableValue: true,
      type: 'abColDefString',
    },
    { headerName: 'Fund', field: 'fund', type: 'abColDefString' },
    {
      headerName: 'Fund Hedging',
      field: 'fundHedging',
      type: 'abColDefString',
    },
    { headerName: 'Fund Ccy', field: 'fundCcy', type: 'abColDefString' },
    {
      headerName: 'As Of Date ',
      field: 'asOfDate',
      valueFormatter: dateFormatter,
      cellClass: 'dateUK',
      hide: true,
      type: 'abColDefDate',
    },
    {
      headerName: 'Trade Date',
      field: 'tradeDate',
      rowGroup: true,
      hide: true,
      valueFormatter: dateFormatter,
      cellClass: 'dateUK',
      type: 'abColDefDate',
    },
    { headerName: 'Type', field: 'typeDesc', type: 'abColDefString' },
    {
      headerName: 'Settle Date',
      field: 'settleDate',
      valueFormatter: dateFormatter,
      cellClass: 'dateUK',
      type: 'abColDefDate',
    },
    { headerName: 'Modified By', field: 'modifiedBy', type: 'abColDefString' },
    {
      headerName: 'Modified On',
      field: 'modifiedOn',
      valueFormatter: dateTimeFormatter,
      type: 'abColDefDate',
      cellClass: 'dateUK',
    },
  ];

  ngOnInit() {
    this.rowData = [
      {
        uniqueID: 1,
        positionId: 971,
        assetId: 111,
        asset: 'Some tranche',
        issuerShortName: 'Some Complémentaires',
        fund: 'DL-ABC-XYZ',
        fundHedging: 'DL-ABC-XYZ',
        fundCcy: 'SLR',
        asOfDate: '2022-10-20T00:00:00',
        tradeDate: '2014-11-25T00:00:00',
        settleDate: '2014-11-25T00:00:00',
        positionCcy: 'INR',
        amount: 123.32,
        parAmount: 4000000,
        pgh_FXRateBaseEffective: 1.26058894715611,
        fxRateBaseEffective: 0,
        parAmountLocal: 4000000,
        fundedParAmountLocal: 4000000,
        costAmountLocal: 4000000,
        fundedCostAmountLocal: 4000000,
        modifiedBy: null,
        modifiedOn: '0001-01-01T00:00:00',
        typeDesc: 'Buy Trade',
        isEdited: false,
        girSourceID: 0,
        girSource: null,
        isOverride: false,
      },
      {
        uniqueID: 2,
        positionId: 971,
        assetId: 111,
        asset: 'Some tranche',
        issuerShortName: 'Some Issuer',
        fund: 'DL-ABC-XYZ',
        fundHedging: 'DL-ABC-XYZ',
        fundCcy: 'SLR',
        asOfDate: '2022-10-20T00:00:00',
        tradeDate: '2016-05-24T00:00:00',
        settleDate: '2016-05-24T00:00:00',
        positionCcy: 'INR',
        amount: 123.3215422395,
        parAmount: -154223.95,
        pgh_FXRateBaseEffective: 1.26058894715611,
        fxRateBaseEffective: 0,
        parAmountLocal: -154223.95,
        fundedParAmountLocal: -154223.95,
        costAmountLocal: -154223.95,
        fundedCostAmountLocal: -154223.95,
        modifiedBy: null,
        modifiedOn: '0001-01-01T00:00:00',
        typeDesc: 'Paydown',
        isEdited: false,
        girSourceID: 0,
        girSource: null,
        isOverride: false,
      },
      {
        uniqueID: 3,
        positionId: 971,
        assetId: 111,
        asset: 'Some tranche',
        issuerShortName: 'Some Issuer',
        fund: 'DL-ABC-XYZ',
        fundHedging: 'DL-ABC-XYZ',
        fundCcy: 'SLR',
        asOfDate: '2022-10-20T00:00:00',
        tradeDate: '2016-12-22T00:00:00',
        settleDate: '2016-12-22T00:00:00',
        positionCcy: 'INR',
        amount: 123.3238405,
        parAmount: -3845776.05,
        pgh_FXRateBaseEffective: 1.26058894715611,
        fxRateBaseEffective: 0,
        parAmountLocal: -3845776.05,
        fundedParAmountLocal: -3845776.05,
        costAmountLocal: -3845776.05,
        fundedCostAmountLocal: -3845776.05,
        modifiedBy: null,
        modifiedOn: '0001-01-01T00:00:00',
        typeDesc: 'Paydown',
        isEdited: false,
        girSourceID: 0,
        girSource: null,
        isOverride: false,
      },
      {
        uniqueID: 4,
        positionId: 976,
        assetId: 110,
        asset: 'UNITRANCHE',
        issuerShortName: 'RMRFBIDCO',
        fund: 'DL-ABC-XYZ',
        fundHedging: 'DL-ABC-XYZ',
        fundCcy: 'SLR',
        asOfDate: '2022-10-20T00:00:00',
        tradeDate: '2014-11-25T00:00:00',
        settleDate: '2014-11-25T00:00:00',
        positionCcy: 'INR',
        amount: 123.32,
        parAmount: 5000000,
        pgh_FXRateBaseEffective: 1.26058894715611,
        fxRateBaseEffective: 0,
        parAmountLocal: 5000000,
        fundedParAmountLocal: 5000000,
        costAmountLocal: 5000000,
        fundedCostAmountLocal: 5000000,
        modifiedBy: null,
        modifiedOn: '0001-01-01T00:00:00',
        typeDesc: 'Buy Trade',
        isEdited: false,
        girSourceID: 0,
        girSource: null,
        isOverride: false,
      },
      {
        uniqueID: 5,
        positionId: 976,
        assetId: 110,
        asset: 'UNITRANCHE',
        issuerShortName: 'RMRFBIDCO',
        fund: 'DL-ABC-XYZ',
        fundHedging: 'DL-ABC-XYZ',
        fundCcy: 'SLR',
        asOfDate: '2022-10-20T00:00:00',
        tradeDate: '2015-01-16T00:00:00',
        settleDate: '2015-01-16T00:00:00',
        positionCcy: 'INR',
        amount: 123.325,
        parAmount: -5000000,
        pgh_FXRateBaseEffective: 1.26058894715611,
        fxRateBaseEffective: 0,
        parAmountLocal: -5000000,
        fundedParAmountLocal: -5000000,
        costAmountLocal: -5000000,
        fundedCostAmountLocal: -5000000,
        modifiedBy: null,
        modifiedOn: '2021-12-21T00:00:00',
        typeDesc: 'Paydown',
        isEdited: false,
        girSourceID: 0,
        girSource: null,
        isOverride: false,
      },
    ];

    this.gridOptions = {
      enableRangeSelection: true,
      sideBar: true,
      suppressMenuHide: true,
      singleClickEdit: true,
      statusBar: {
        statusPanels: [
          { statusPanel: 'agTotalRowCountComponent', align: 'left' },
          { statusPanel: 'agFilteredRowCountComponent' },
        ],
      },
      columnDefs: this.columnDefs,
      defaultColDef: {
        resizable: true,
        enableValue: true,
        enableRowGroup: true,
        enablePivot: true,
        sortable: true,
        filter: true,
      },
      autoGroupColumnDef: {
        sort: 'desc',
        sortable: true,
      },
      rowGroupPanelShow: 'always',
      allowContextMenuWithControlKey: true,
      excelStyles: CommonConfig.GENERAL_EXCEL_STYLES,
    };

    this.adaptableOptions = {
      licenseKey: CommonConfig.ADAPTABLE_LICENSE_KEY,
      primaryKey: 'uniqueID',
      userName: `Sample User`,
      adaptableId: 'Portfolio History',
      adaptableStateKey: `Portfolio State Key`,

      exportOptions: CommonConfig.GENERAL_EXPORT_OPTIONS,

      layoutOptions: {
        autoSaveLayouts: true,
      },

      // teamSharingOptions: {
      //   enableTeamSharing: true,
      //   setSharedEntities: setSharedEntities.bind(this),
      //   getSharedEntities: getSharedEntities.bind(this)
      // },

      actionOptions: {
        actionColumns: [
          {
            columnId: 'ActionDelete',
            friendlyName: 'Delete',
            actionColumnButton: {
              onClick: (
                button: AdaptableButton<ActionColumnContext>,
                context: ActionColumnContext
              ) => {},
              icon: {
                src: '../assets/img/trash.svg',
                style: {
                  height: 25,
                  width: 25,
                },
              },
            },
          },
        ],
      },
      generalOptions: {
        /* Adaptable calls this on grid init */
        /* Custom comparator for descending order */
        customSortComparers: [
          {
            scope: {
              ColumnIds: ['tradeDate'],
            },
            comparer: (valueA: Date, valueB: Date) => {
              if (valueA > valueB) return 1;
              else if (valueA < valueB) return -1;
              else return 0;
            },
          },
        ],
      },

      predefinedConfig: {
        Dashboard: {
          Revision: 1,
          ModuleButtons: CommonConfig.DASHBOARD_MODULE_BUTTONS,
          IsCollapsed: true,
          Tabs: [
            {
              Name: 'Layout',
              Toolbars: ['Layout'],
            },
          ],
          DashboardTitle: ' ',
        },
        QuickSearch: {
          QuickSearchText: '',
          Style: {
            BackColor: '#ffff00',
            ForeColor: '#808080',
          },
        },

        Layout: {
          Revision: 4,
          CurrentLayout: 'Basic Portfolio History',
          Layouts: [
            {
              Name: 'Basic Portfolio History',
              Columns: [
                'modifiedOn',
                'issuerShortName',
                'asset',
                'fund',
                'fundHedging',
                'settleDate',
                'typeDesc',
                'positionCcy',
                'fundCcy',
                'fxRateBaseEffective',
                'pgh_FXRateBaseEffective',
                'amount',
                'parAmount',
                'parAmountLocal',
                'fundedParAmountLocal',
                'costAmountLocal',
                'fundedCostAmountLocal',
                'assetId',
                'modifiedBy',
                'isEdited',
                'isOverride',
                'girSource',
                'girSourceID',
                'actionNew',
                'ActionDelete',
              ],
              PinnedColumnsMap: {
                actionNew: 'right',
                ActionDelete: 'right',
              },
              RowGroupedColumns: ['tradeDate', 'fundCcy', 'positionCcy'],
              ColumnWidthMap: {
                ActionDelete: 50,
              },
              // ColumnFilters: [{
              //   ColumnId: 'typeDesc',
              //   Predicate: {
              //     PredicateId: 'Values',
              //     Inputs: ['Borrowing', 'Buy Trade']
              //   }
              // }],
              ColumnSorts: [
                {
                  ColumnId: 'tradeDate',
                  SortOrder: 'Desc',
                },
              ],
            },
          ],
        },
      },
    };
  }
}
