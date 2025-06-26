import type { CellValue } from './basic'

export interface ThemeConfig {
  headerHeight: number
  rowHeight: number
  borderColor: string
  headerBackgroundColor: string
  rowBackgroundColor: string
  alternateRowBackgroundColor?: string
  textColor: string
  fontSize: number
  fontFamily: string
}

// 渲染相关
export interface ViewportInfo {
  startRow: number
  endRow: number
  startColumn: number
  endColumn: number
  offsetX: number
  offsetY: number
}

export interface RenderContext {
  canvas: HTMLCanvasElement
  ctx: CanvasRenderingContext2D
  viewport: ViewportInfo
  pixelRatio: number
  theme: ThemeConfig
}

// 单元格渲染器接口
export interface CellRenderer {
  render(
    ctx: CanvasRenderingContext2D,
    value: CellValue,
    bounds: CellBounds,
    options: CellRenderOptions
  ): void
}

// 单元格边界
export interface CellBounds {
  x: number
  y: number
  width: number
  height: number
}

// 单元格渲染选项
export interface CellRenderOptions {
  isSelected: boolean
  isEditing: boolean
  isHovered: boolean
  rowIndex: number
  columnIndex: number
  theme: ThemeConfig
}

// 渲染层级
export enum RenderLayer {
  BACKGROUND = 'background',
  GRID = 'grid',
  CONTENT = 'content',
  SELECTION = 'selection',
  OVERLAY = 'overlay',
}

export const DEFAULT_THEME: ThemeConfig = {
  headerHeight: 40,
  rowHeight: 32,
  borderColor: '#e0e0e0',
  headerBackgroundColor: '#f5f5f5',
  rowBackgroundColor: '#ffffff',
  alternateRowBackgroundColor: '#fafafa',
  textColor: '#333333',
  fontSize: 14,
  fontFamily: 'Arial, sans-serif',
}
