import type { CellPosition } from './position'
import type { CellValue, RowData } from './basic'

/**
 * 事件类型枚举
 *
 * @export
 * @enum {string}
 */
export enum EventType {
  // 表格生命周期
  TABLE_INIT = 'table:init',
  TABLE_DESTROY = 'table:destroy',
  // 数据事件
  DATA_CHANGE = 'data:change',
  DATA_LOAD = 'data:load',

  // 用户交互事件
  CELL_CLICK = 'cell:click',
  CELL_DBLCLICK = 'cell:dblclick',
  CELL_MOUSE_ENTER = 'cell:mouseEnter',
  CELL_MOUSE_LEAVE = 'cell:mouseLeave',
  CELL_MOUSE_MOVE = 'cell:mouseMove',
  CELL_MOUSE_DOWN = 'cell:mouseDown',
  CELL_MOUSE_UP = 'cell:mouseUp',

  // 行事件
  ROW_CLICK = 'row:click',
  ROW_DBLCLICK = 'row:dblclick',
  ROW_MOUSE_ENTER = 'row:mouseEnter',
  ROW_MOUSE_LEAVE = 'row:mouseLeave',
  ROW_MOUSE_MOVE = 'row:mouseMove',
  ROW_MOUSE_DOWN = 'row:mouseDown',
  ROW_MOUSE_UP = 'row:mouseUp',

  // 列事件
  COLUMN_CLICK = 'column:click',
  COLUMN_DBLCLICK = 'column:dblclick',
  COLUMN_MOUSE_ENTER = 'column:mouseEnter',
  COLUMN_MOUSE_LEAVE = 'column:mouseLeave',
  COLUMN_MOUSE_MOVE = 'column:mouseMove',
  COLUMN_MOUSE_DOWN = 'column:mouseDown',
  COLUMN_MOUSE_UP = 'column:mouseUp',
  COLUMN_RESIZE = 'column:resize',
  COLUMN_SORT = 'column:sort',
  COLUMN_FILTER = 'column:filter',
  COLUMN_RESIZE_START = 'column:resizeStart',
  COLUMN_RESIZE_END = 'column:resizeEnd',
  COLUMN_RESIZE_CANCEL = 'column:resizeCancel',
  COLUMN_RESIZE_SAVE = 'column:resizeSave',

  // 编辑事件
  CELL_EDIT_START = 'cell:editStart',
  CELL_EDIT_END = 'cell:editEnd',
  CELL_EDIT_CANCEL = 'cell:editCancel',
  CELL_EDIT_SAVE = 'cell:editSave',
  CELL_EDIT_CHANGE = 'cell:editChange',
  CELL_EDIT_BLUR = 'cell:editBlur',
  CELL_EDIT_FOCUS = 'cell:editFocus',

  // 视图事件
  SCROLL = 'scroll',
  RESIZE = 'resize',

  // 渲染事件
  RENDER_START = 'render:start',
  RENDER_END = 'render:end',
}

/**
 * 表格事件接口
 *
 * @export
 * @interface TableEvent
 */
export interface TableEvent<T = unknown> {
  type: EventType
  timestamp: number
  data: T
}

/**
 * 单元格点击事件
 *
 * @export
 * @interface CellClickEvent
 */
export interface CellClickEvent extends TableEvent {
  type: EventType.CELL_CLICK
  data: {
    position: CellPosition
    value: CellValue
    rowData: RowData
  }
}

/**
 * 滚动事件
 *
 * @export
 * @interface ScrollEvent
 */
export interface ScrollEvent extends TableEvent {
  type: EventType.SCROLL
  data: {
    scrollLeft: number
    scrollTop: number
  }
}

/**
 * 事件监听器类型
 *
 * @export
 * @template T
 * @typedef {EventListener}
 */
export type EventListener<T extends TableEvent = TableEvent> = (
  event: T
) => void

/**
 * 事件监听器映射接口
 *
 * @export
 * @interface EventListenerMap
 */
export interface EventListenerMap {
  [EventType.CELL_CLICK]: EventListener<CellClickEvent>
  [EventType.SCROLL]: EventListener<ScrollEvent>
  /* 其他事件暂未定义 */
}
