/**
 * 虚拟滚动配置接口
 *
 * @export
 * @interface VirtualScrollConifg
 */
export interface VirtualScrollConifg {
  enabled: boolean
  rowHeight: number
  bufferSize?: number
  overscan?: number
  columnVirtualization?: boolean
  threshold?: number
}
