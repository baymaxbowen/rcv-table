# RCV-Table

> High-performance virtual table component based on Canvas

**RCV-Table** 是一个基于Canvas的高性能虚拟表格组件库，专为现代Web应用的大数据场景设计。

## ✨ 特性

- 🚀 **极致性能** - Canvas渲染 + 虚拟滚动，轻松处理100万行数据
- 💡 **开发友好** - 简洁的API设计，30分钟快速上手
- 🔧 **高度灵活** - 插件化架构，支持自定义扩展
- 📦 **生产就绪** - 完整的TypeScript支持，企业级质量

## 🚧 开发状态

这个项目目前正在积极开发中...

### 开发进度

- [x] 项目初始化
- [ ] 核心引擎开发
- [ ] React组件封装
- [ ] 文档和示例

## 🏗️ 项目结构

```
rcv-table/
├── packages/
│   ├── core/          # @rcv-table/core - 核心引擎
│   └── react/         # @rcv-table/react - React组件
├── apps/
│   └── playground/    # 开发调试环境
└── tools/             # 构建工具和配置
```

## 🛠️ 开发环境

### 系统要求

- Node.js >= 16
- pnpm >= 8

### 快速开始

```bash
# 克隆项目
git clone https://github.com/baymaxbowen/rcv-table.git
cd rcv-table

# 安装依赖
pnpm install

# 启动开发环境
pnpm dev

# 构建项目
pnpm build

# 运行测试
pnpm test
```

## 📋 脚本命令

- `pnpm dev` - 启动开发服务器
- `pnpm build` - 构建所有包
- `pnpm test` - 运行测试
- `pnpm lint` - 代码检查
- `pnpm format` - 代码格式化

## 🤝 贡献

欢迎贡献代码！请查看 [CONTRIBUTING.md](./CONTRIBUTING.md) 了解更多信息。

## 📄 许可证

MIT License - 查看 [LICENSE](./LICENSE) 文件了解详情。