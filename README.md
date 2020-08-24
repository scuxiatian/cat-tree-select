# cat-tree-select

**Vue component (Vue.js 2.0) based on [Element-ui](https://github.com/ElemeFE/element)**


## Features

* Consistent with the appearance of Element-ui and works well with ElForm component
* Contains single and multple tree select
* Customize tree nodes style
* Filterable tree nodes

## Demo Installation

### Clone repository

```bash
git clone git@github.com:scuxiatian/cat-tree-select.git
```

### Install dependences

```
npm install
```

### Preview demo

```
npm run serve
```

## Example

### single tree select

```javascript
<cat-tree-select
	v-model="value"
	:data="data"
	:props="props">
</cat-tree-select>
```

```javascript
<script>
export default {
  data () {
    return {
      value: '',
      props: {
        key: 'label'
      },
      data: [{
        label: '一级 1',
        children: [{
          label: '二级 1-1',
          children: [{
            label: '三级 1-1-1'
          }]
        }]
      }, {
        label: '一级 2',
        children: [{
          label: '二级 2-1',
          children: [{
            label: '三级 2-1-1'
          }]
        }, {
          label: '二级 2-2',
          children: [{
            label: '三级 2-2-1'
          }]
        }]
      }, {
        label: '一级 3',
        children: [{
          label: '二级 3-1',
          children: [{
            label: '三级 3-1-1'
          }]
        }, {
          label: '二级 3-2',
          children: [{
            label: '三级 3-2-1'
          }]
        }]
      }]
    }
  }
}
</script>
```

### multiple tree select

```javascript
<cat-tree-select
	v-model="value"
	:data="data"
	:props="props"
	check-strictly
	multiple>
</cat-tree-select>
```

### customer tree nodes
```javascript
<cat-tree-select
	v-model="value1"
	:data="data"
	:props="props">
	<template v-slot="{ node, data }">
		<span>{{ node.label }}</span>
		<span style="margin-left: 20px; color: #8492a6; font-size: 13px">
			{{ data.value }}
		</span>
	</template>
</cat-tree-select>
```

### filterable tree nodes
```javascript
<cat-tree-select
	v-model="value1"
	:data="data"
	:props="props"
	:filter-node-method="filterNode"
	filterable>
</cat-tree-select>
```
```javascript
filterNode (value, data) {
	if (!value) return true
	return data.label.indexOf(value) !== -1
}
```

## Api document

### TreeSelect Attributes

|   参数   | 说明   |  类型  | 可选值 | 默认值 |
| :--------:   | :-----:  | :----:  | :--------:   | :--------:   |
| value / v-model | 绑定值 | boolean / string / number | — | — |
| multiple | 是否多选 | boolean | — | false |
| disabled | 是否禁用 | boolean | — | false |
| size | 输入框尺寸 | string | medium/small/mini | —
| clearable | 是否可以清空选项 | boolean |—|false
|collapse-tags|多选时是否将选中值按文字的形式展示|boolean|—|false
|name|tree-select input 的 name 属性|string|—|—
|placeholder|占位符|string|—|请选择
|filterable|是否可搜索|boolean|—|false
|placement|弹出框出现位置|String|top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end|bottom
|props|配置选项，具体看下表|object|—|—
|el-tree attributes|参考element-ui官网 el-tree attributes|—|—|—

### Props
|   参数   | 说明   |  类型  |可选值 | 默认值 |
| :--------:   | :-----:  | :----:  |:--------:   | :--------:   |
|key|指定节点值为节点对象的某个属性值（必填）|string / number|—|—
|label|指定节点标签为节点对象的某个属性值|string, function(data, node)|—|—
|children|指定子树为节点对象的某个属性值|string|—|—
|disabled|指定节点选择框是否禁用为节点对象的某个属性值|boolean, function(data, node)|—|—
|isLeaf|指定节点是否为叶子节点，仅在指定了 lazy 属性的情况下生效|boolean, function(data, node)|—|—

### TreeSelect Events

|   事件类型   | 说明   |  回调参数  |
| :--------:   | :-----:  | :----:  |
|change|选中值发生变化时触发|目前的选中值
|visible-change|下拉框出现/隐藏时触发|出现则为 true，隐藏则为 false
|remove-tag|多选模式下移除tag时触发|移除的tag值
|clear|可清空的单选模式下用户点击清空按钮时触发|—
|blur|当 input 失去焦点时触发|(event: Event)
|focus|当 input 获得焦点时触发|(event: Event)
|el-tree events|参考element-ui官网 el-tree events|—

### TreeSelect V-Slot
|   name   | 说明  |
| :--------:   | :-----:  |
|-|自定义备选项的节点内容，参数为 { node, data }，分别为当前节点的 Node 对象和数据

