<template>
  <div class="flex-div">
    <div class="block">
      <span class="demonstration">默认显示所有Tag</span>
      <cat-tree-select
        v-model="value1"
        :data="data"
        :props="props"
        check-strictly
        multiple></cat-tree-select>
    </div>
    <div class="block">
      <span class="demonstration">折叠展示Tag</span>
      <cat-tree-select
        style="margin-left: 20px;"
        v-model="value2"
        :data="data"
        :props="props"
        check-strictly
        multiple
        collapse-tags></cat-tree-select>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value1: [],
      value2: [],
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
