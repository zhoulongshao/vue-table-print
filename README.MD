# vue-table-print

[![npm version](https://badge.fury.io/js/vue-table-print.svg)](https://badge.fury.io/js/vue-table-print)
[![downloads](https://img.shields.io/npm/dm/vue-table-print.svg)](https://npmjs.org/package/vue-table-print)
[![license](https://img.shields.io/npm/l/vue-table-print.svg)](https://github.com/yourusername/vue-table-print/blob/main/LICENSE)

一个强大的Vue 3表格打印工具，支持ElementPlus、Ant Design Vue等主流UI组件库。

## 特性

- 🚀 **Vue 3 + TypeScript** - 完整的类型支持
- 📱 **响应式设计** - 适配不同屏幕和打印尺寸
- 🎨 **高度可定制** - 支持自定义样式、水印、Logo等
- 📄 **多种导出格式** - 支持打印、预览、导出HTML
- 🔧 **灵活配置** - 丰富的配置选项满足不同需求
- 📦 **轻量级** - 零依赖，体积小巧
- 🎯 **易于使用** - 简单的API设计，快速上手

## 安装

```bash
# npm
npm install vue-table-print

# yarn
yarn add vue-table-print

# pnpm
pnpm add vue-table-print
```

## 快速开始

### 基础用法

```vue
<template>
  <div>
    <el-button @click="handlePrint">打印表格</el-button>
    <el-table :data="tableData">
      <el-table-column prop="name" label="姓名" />
      <el-table-column prop="age" label="年龄" />
      <el-table-column prop="department" label="部门" />
    </el-table>
  </div>
</template>

<script setup>
import { useTablePrint } from 'vue-table-print'

const { printTable } = useTablePrint({
  title: '员工信息表'
})

const tableData = [
  { name: '张三', age: 28, department: '技术部' },
  { name: '李四', age: 32, department: '产品部' }
]

const columns = [
  { prop: 'name', label: '姓名' },
  { prop: 'age', label: '年龄', align: 'center' },
  { prop: 'department', label: '部门' }
]

const handlePrint = async () => {
  const result = await printTable(tableData, columns)
  if (!result.success) {
    console.error('打印失败:', result.message)
  }
}
</script>
```

### 类实例用法

```javascript
import { TablePrintUtil } from 'vue-table-print'

const printUtil = new TablePrintUtil({
  title: '数据报表',
  pageSize: 'A4',
  orientation: 'landscape'
})

// 打印表格
await printUtil.printTable(data, columns)

// 预览表格
printUtil.previewTable(data, columns)

// 导出HTML
printUtil.exportToHTML(data, columns, 'report.html')
```

## API参考

### PrintOptions 配置选项

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| title | string | '数据表格' | 打印标题 |
| showHeader | boolean | true | 是否显示页头 |
| showFooter | boolean | true | 是否显示页脚 |
| pageSize | 'A4' \| 'A3' \| 'A5' \| 'Letter' | 'A4' | 页面尺寸 |
| orientation | 'portrait' \| 'landscape' | 'portrait' | 页面方向 |
| margins | string | '1cm' | 页面边距 |
| fontSize | string | '12px' | 字体大小 |
| headerStyle | object | - | 表头样式配置 |
| customStyles | string | '' | 自定义CSS样式 |
| watermark | string | '' | 水印文字 |
| logo | string | '' | Logo图片URL |

### TableColumn 列配置

| 参数 | 类型 | 说明 |
|------|------|------|
| prop | string | 数据字段名 |
| label | string | 列标题 |
| align | 'left' \| 'center' \| 'right' | 对齐方式 |
| width | number \| string | 列宽度 |
| formatter | function | 格式化函数 |

### 方法

#### useTablePrint(options?)

组合式函数，返回打印相关方法。

```javascript
const { printTable, previewTable, exportToHTML } = useTablePrint(options)
```

#### printTable(data, columns, options?)

打印表格数据。

- **data**: `any[]` - 表格数据
- **columns**: `TableColumn[]` - 列配置
- **options**: `Partial<PrintOptions>` - 可选配置
- **返回**: `Promise<PrintResult>` - 打印结果

#### previewTable(data, columns, options?)

预览表格打印效果。

#### exportToHTML(data, columns, filename?, options?)

导出为HTML文件。

## 高级用法

### 自定义格式化

```javascript
const columns = [
  {
    prop: 'salary',
    label: '薪资',
    align: 'right',
    formatter: (row, column, value) => `￥${value.toLocaleString()}`
  },
  {
    prop: 'status',
    label: '状态',
    formatter: (row) => row.status === 1 ? '在职' : '离职'
  }
]
```

### 添加水印和Logo

```javascript
const { printTable } = useTablePrint({
  title: '机密文档',
  watermark: '内部资料',
  logo: '/path/to/company-logo.png'
})
```

### 自定义样式

```javascript
const customOptions = {
  customStyles: `
    .print-table th {
      background-color: #1890ff !important;
      color: white !important;
    }
    .print-table td {
      border-color: #1890ff !important;
    }
  `
}

await printTable(data, columns, customOptions)
```

### 横向打印大表格

```javascript
await printTable(data, columns, {
  orientation: 'landscape',
  pageSize: 'A3',
  fontSize: '10px'
})
```

## 浏览器兼容性

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 常见问题

### Q: 为什么打印窗口被拦截？
A: 现代浏览器会拦截弹窗，请允许当前网站的弹窗权限。

### Q: 如何自定义打印样式？
A: 使用 `customStyles` 选项添加自定义CSS，或通过 `headerStyle` 配置表头样式。

### Q: 支持哪些UI组件库？
A: 本库是UI组件库无关的，支持ElementPlus、Ant Design Vue、Naive UI等所有Vue 3组件库。

## 贡献

欢迎提交 Issue 和 Pull Request！

## License

MIT License

## 更新日志

### v1.0.0
- 🎉 首次发布
- ✨ 支持基础打印功能
- ✨ 支持预览和导出HTML
- ✨ 完整的TypeScript支持