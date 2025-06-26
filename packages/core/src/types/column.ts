import type { CellValue } from './basic'
import type { CellRenderer } from './render'

/**
 * 列类型枚举
 *
 * @export
 * @enum {number}
 */
export enum ColumnType {
  TEXT = 'text',
  NUMBER = 'number',
  DATE = 'date',
  BOOLEAN = 'boolean',
  CURRENCY = 'currency',
  CUSTOM = 'custom',
}

/**
 * 排序方向枚举
 *
 * @export
 * @enum {number}
 */
export enum SortDirection {
  ASC = 'asc',
  DESC = 'desc',
}

/**
 * 列配置接口
 *
 * @export
 * @interface Column
 */
export interface Column {
  key: string
  title: string
  dataIndex: string
  type: ColumnType
  width?: number
  minWidth?: number
  maxWidth?: number
  sortable?: boolean
  editable?: boolean
  fixed?: 'left' | 'right'
  resizable?: boolean
  sorter?: (a: CellValue, b: CellValue) => number
  renderer?: CellRenderer
}
