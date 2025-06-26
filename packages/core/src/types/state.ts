import type { CellPosition, CellRange } from './position'
import type { TableData, CellValue } from './basic'
import type { Column, SortDirection } from './column'
import type { EventType, TableEvent } from './events'

// 状态管理类型
export interface SelectionState {
  selectedRows: Set<number>
  selectedCells: Set<string>
  selectedRanges: CellRange
  isMultiSelect: boolean
}

export interface EditState {
  isEditing: boolean
  editingCell?: CellPosition
  editingValue?: CellValue
  originalValue?: CellValue
}

export interface SortState {
  columnKey?: string
  direction?: SortDirection
  multiSort?: Array<{
    columnKey: string
    direction: SortDirection
  }>
}

export interface ScrollState {
  scrollTop: number
  scrollLeft: number
  viewportHeight: number
  viewportWidth: number
}

export interface TableState {
  data: TableData
  columns: Column[]
  selection: SelectionState
  edit: EditState
  sort: SortState
  scroll: ScrollState
  loading: boolean
  error?: string | null
}

export type StateUpdateType = 'replace' | 'merge' | 'patch'

export interface StateUpdate<T> {
  type: StateUpdateType
  data: T
}

export interface StateChangeEvent<T = unknown> extends TableEvent {
  type: EventType.DATA_CHANGE
  data: {
    path: string
    oldValue: T
    newValue: T
    updateType: StateUpdateType
  }
}
