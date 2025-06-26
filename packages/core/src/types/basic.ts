/**
 * 单元格值类型
 *
 * @export
 * @type {CellValue}
 */
export type CellValue = string | number | boolean | Date | null | undefined

/**
 * 行数据接口
 *
 * @export
 * @interface RowData
 */
export interface RowData {
  [key: string]: CellValue
}

/**
 * 表格数据类型
 *
 * @export
 * @type {TableData}
 */
export type TableData = RowData[]
