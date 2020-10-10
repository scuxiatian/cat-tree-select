<template>
  <view-page title="TreeSelect 树选择器" desc="当选项有层次结构时，使用树选择器展示并选择内容">
    <show-box :config="baseConfig">
      <tree-select-base></tree-select-base>
    </show-box>
    <show-box :config="disabledOptionConfig">
      <tree-select-disabled-option></tree-select-disabled-option>
    </show-box>
    <show-box :config="disabledConfig">
      <tree-select-disabled></tree-select-disabled>
    </show-box>
    <show-box :config="clearableConfig">
      <tree-select-clearable></tree-select-clearable>
    </show-box>
    <show-box :config="multipleConfig">
      <tree-select-multiple></tree-select-multiple>
    </show-box>
    <show-box :config="templateConfig">
      <tree-select-template></tree-select-template>
    </show-box>
    <show-box :config="filterableConfig">
      <tree-select-filterable></tree-select-filterable>
    </show-box>

    <show-table title="TreeSelect" :data="attributes"></show-table>
    <show-table title="" type="props" :data="props"></show-table>
    <show-table title="TreeSelect" type="events" :data="events"></show-table>
    <show-table title="TreeSelect" type="methods" :data="methods"></show-table>
    <show-table title="TreeSelect" type="vSlots" :data="vslots"></show-table>
  </view-page>
</template>

<script>
import TreeSelectBase from './components/TreeSelectBase'
import TreeSelectDisabledOption from './components/TreeSelectDisabledOption'
import TreeSelectDisabled from './components/TreeSelectDisabled'
import TreeSelectClearable from './components/TreeSelectClearable'
import TreeSelectMultiple from './components/TreeSelectMultiple'
import TreeSelectTemplate from './components/TreeSelectTemplate'
import TreeSelectFilterable from './components/TreeSelectFilterable'
import { baseCode, disabledOptionCode, disabledCode, clearableCode, multipleCode, templateCode, filterableCode } from './code'

export default {
  name: 'TreeSelectApi',
  components: {
    TreeSelectBase,
    TreeSelectDisabled,
    TreeSelectDisabledOption,
    TreeSelectClearable,
    TreeSelectMultiple,
    TreeSelectTemplate,
    TreeSelectFilterable
  },
  data () {
    return {
      baseConfig: {
        title: '基础用法',
        desc: '简单的树形选择器',
        code: baseCode,
        codeDesc: 'v-model的值为选中树形节点的key属性，key属性可通过props配置为其它属性'
      },
      disabledOptionConfig: {
        title: '有禁用选项',
        desc: '',
        code: disabledOptionCode,
        codeDesc: '通过disabled设置禁用状态。'
      },
      disabledConfig: {
        title: '禁用状态',
        desc: '选择器不可用状态',
        code: disabledCode,
        codeDesc: '为cat-tree-select设置disabled属性，则整个选择器不可用'
      },
      clearableConfig: {
        title: '可清空单选',
        desc: '包含清空按钮，可将选择器清空为初始状态',
        code: clearableCode,
        codeDesc: '为cat-tree-select设置clearable属性，则可将选择器清空。需要注意的是，clearable属性仅适用于单选。'
      },
      multipleConfig: {
        title: '基础多选',
        desc: '适用性较广的基础多选，用 Tag 展示已选项',
        code: multipleCode,
        codeDesc: '为cat-tree-select设置multiple属性即可启用多选，此时v-model的值为当前选中值所组成的数组。默认情况下选中值会以 Tag 的形式展现，你也可以设置collapse-tags属性将它们合并为一段文字。'
      },
      templateConfig: {
        title: '自定义节点内容',
        desc: '可以自定义备选项的节点内容',
        code: templateCode,
        codeDesc: '可以通过v-slot对级联选择器的备选项的节点内容进行自定义，v-slot会传入两个字段 node 和 data，分别表示当前节点的 Node 对象和数据。'
      },
      filterableConfig: {
        title: '可搜索',
        desc: '可以利用搜索功能快速查找选项',
        code: filterableCode,
        codeDesc: '为cat-tree-select添加filterable属性即可启用搜索功能。需要通过传入一个filter-node-method来实现。filter-node-method为一个Function，它会在输入值发生变化时调用，参数为当前输入值与节点data值。'
      },
      attributes: [
        ['value / v-model', '绑定值', 'boolean / string / number', '—', '—'],
        ['multiple', '是否多选', 'boolean', '—', 'false'],
        ['disabled', '是否禁用', 'boolean', '—', 'false'],
        ['size', '输入框尺寸', 'string', 'medium/small/mini', '—'],
        ['clearable', '是否可以清空选项', 'boolean', '—', 'false'],
        ['collapse-tags', '多选时是否将选中值按文字的形式展示', 'boolean', '—', 'false'],
        ['name', 'tree-select input 的 name 属性', 'string', '—', '—'],
        ['placeholder', '占位符', 'string', '—', '请选择'],
        ['filterable', '是否可搜索', 'boolean', '—', 'false'],
        ['placement', '弹出框出现位置', 'String', 'top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end', 'bottom'],
        ['props', '配置选项，具体看下表', 'object', '—', '—'],
        ['el-tree attributes', '参考element-ui官网 el-tree attributes', '—', '—', '—']
      ],
      props: [
        ['key', '指定节点值为节点对象的某个属性值（必填）', 'string / number', '—', '—'],
        ['label', '指定节点标签为节点对象的某个属性值', 'string, function(data, node)', '—', '—'],
        ['children', '指定子树为节点对象的某个属性值', 'string', '—', '—'],
        ['disabled', '指定节点选择框是否禁用为节点对象的某个属性值', 'boolean, function(data, node)', '—', '—'],
        ['isLeaf', '指定节点是否为叶子节点，仅在指定了 lazy 属性的情况下生效', 'boolean, function(data, node)', '—', '—']
      ],
      events: [
        ['change', '选中值发生变化时触发', '目前的选中值'],
        ['visible-change', '下拉框出现/隐藏时触发', '出现则为 true，隐藏则为 false'],
        ['remove-tag', '多选模式下移除tag时触发', '移除的tag值'],
        ['clear', '可清空的单选模式下用户点击清空按钮时触发', '—'],
        ['blur', '当 input 失去焦点时触发', '(event: Event)'],
        ['focus', '当 input 获得焦点时触发', '(event: Event)'],
        ['el-tree events', '参考element-ui官网 el-tree events', '—']
      ],
      methods: [
        ['updateCheckedNodes', '刷新选中节点，异步方法更新value或data时用', '—']
      ],
      vslots: [
        ['-', '自定义备选项的节点内容，参数为 { node, data }，分别为当前节点的 Node 对象和数据']
      ]
    }
  }
}
</script>
