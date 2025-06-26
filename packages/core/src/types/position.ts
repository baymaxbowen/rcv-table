/**
 * 单元格位置接口
 *
 * @export
 * @interface CellPosition
 */
export interface CellPosition {
  row: number
  column: number
}

/**
 * 单元格范围接口
 *
 * @export
 * @interface CellRange
 */
export interface CellRange {
  startRow: number
  startColumn: number
  endRow: number
  endColumn: number
}
