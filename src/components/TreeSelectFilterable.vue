<template>
  <div class="flex-div">
    <div class="block">
      <span class="demonstration">单选可搜索</span>
      <cat-tree-select
        v-model="value1"
        :data="data"
        :props="props"
        :filter-node-method="filterNode"
        filterable>
      </cat-tree-select>
    </div>
    <div class="block">
      <span class="demonstration">多选可搜索</span>
      <cat-tree-select
        style="margin-left: 20px;"
        v-model="value2"
        :data="data"
        :props="props"
        check-strictly
        multiple
        :filter-node-method="filterNode"
        filterable>
      </cat-tree-select>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value1: '',
      value2: [],
      props: {
        key: 'value'
      },
      data: [{
        value: '1',
        label: '一级 1',
        children: [{
          value: '1-1',
          label: '二级 1-1',
          children: [{
            value: '1-1-1',
            label: '三级 1-1-1'
          }]
        }]
      }, {
        value: '2',
        label: '一级 2',
        children: [{
          value: '2-1',
          label: '二级 2-1',
          children: [{
            value: '2-1-1',
            label: '三级 2-1-1'
          }]
        }, {
          value: '2-2',
          label: '二级 2-2',
          children: [{
            value: '2-2-1',
            label: '三级 2-2-1'
          }]
        }]
      }, {
        value: '3',
        label: '一级 3',
        children: [{
          value: '3-1',
          label: '二级 3-1',
          children: [{
            value: '3-1-1',
            label: '三级 3-1-1'
          }]
        }, {
          value: '3-2',
          label: '二级 3-2',
          children: [{
            value: '3-2-1',
            label: '三级 3-2-1'
          }]
        }]
      }]
    }
  },
  methods: {
    filterNode (value, data) {
      if (!value) return true
      return data.label.indexOf(value) !== -1
    }
  }
}
</script>

<style scoped>
.flex-div {
  display: flex;
}
.block {
  padding: 30px 0;
  text-align: center;
  border-right: 1px solid #eff2f6;
  width: 50%;
  box-sizing: border-box;
}
.demonstration {
  display: block;
  color: #8492a6;
  font-size: 14px;
  margin-bottom: 20px;
}
</style>
