<template>
  <div class="test-container">
    <RightList :data="list" />
  </div>
</template>

<script>
import RightList from './'
export default {
  components: {
    RightList,
  },
  data() {
    return {
      list: [
        { name: 'A' },
        {
          name: 'B',
          children: [{ name: 'B-1' }, { name: 'B-2' }, { name: 'B-3', isSelected: true }, { name: 'B-4' }],
        },
        {
          name: 'C',
          children: [
            { name: 'C-1' },
            { name: 'C-2' },
            {
              name: 'C-3',
              children: [{ name: 'C-3-1' }, { name: 'C-3-2' }, { name: 'C-3-3' }, { name: 'C-3-4' }],
            },
            { name: 'C-4' },
          ],
        },
        { name: 'D' },
        { name: 'E' },
        { name: 'F' },
        { name: 'G' },
        { name: 'H' },
      ],
    }
  },
}
</script>

<style lang="less" scoped></style>
