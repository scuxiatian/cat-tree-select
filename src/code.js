export const baseCode = `
<template>
  <cat-tree-select
    v-model="value"
    :data="data"
    :props="props"></cat-tree-select>
</template>

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
`

export const disabledOptionCode = `
<template>
  <cat-tree-select
    v-model="value"
    :data="data"
    :props="props"></cat-tree-select>
</template>

<script>
export default {
  data () {
    return {
      value: '',
      props: {
        key: 'label'
      },
      data: [{
        id: 1,
        label: '一级 2',
        children: [{
          id: 3,
          label: '二级 2-1',
          children: [{
            id: 4,
            label: '三级 3-1-1'
          }, {
            id: 5,
            label: '三级 3-1-2',
            disabled: true
          }]
        }, {
          id: 2,
          label: '二级 2-2',
          disabled: true,
          children: [{
            id: 6,
            label: '三级 3-2-1'
          }, {
            id: 7,
            label: '三级 3-2-2',
            disabled: true
          }]
        }]
      }]
    }
  }
}
</script>
`

export const disabledCode = `
<template>
  <cat-tree-select
    v-model="value"
    :data="data"
    :props="props"
    disabled></cat-tree-select>
</template>

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
`

export const clearableCode = `
<template>
  <cat-tree-select
    v-model="value"
    :data="data"
    :props="props"
    clearable></cat-tree-select>
</template>

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
`

export const multipleCode = `
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
`

export const templateCode = `
<template>
  <div class="flex-div">
    <div class="block">
      <span class="demonstration">单选自定义节点</span>
      <cat-tree-select
        v-model="value1"
        :data="data"
        :props="props">
        <template v-slot="{ node, data }">
          <span>{{ node.label }}</span>
          <span style="margin-left: 20px; color: #8492a6; font-size: 13px">{{ data.value }}</span>
        </template>
      </cat-tree-select>
    </div>
    <div class="block">
      <span class="demonstration">多选自定义节点</span>
      <cat-tree-select
        style="margin-left: 20px;"
        v-model="value2"
        :data="data"
        :props="props"
        check-strictly
        multiple>
        <template v-slot="{ node, data }">
          <span>{{ node.label }}</span>
          <span style="margin-left: 20px; color: #8492a6; font-size: 13px">{{ data.value }}</span>
        </template>
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
  }
}
</script>
`

export const filterableCode = `
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
`
