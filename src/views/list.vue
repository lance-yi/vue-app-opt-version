<template>
  <Scroll
    ref="scroll"
    class="scroll-wrap"
    :pullDownRefresh="pullDownRefresh"
    :pullUpLoad="true"
    @pullingDown="onRefresh"
    @scroll="scroll"
    @pullingUp="onLoad"
  >
    <ul>
      <li v-for="(item, index) in data" :key="index">
        {{index+1}}、{{ item.title }}
      </li>
    </ul>
  </Scroll>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'list',
  data () {
    return {
      data: [],
      page: 1,
      pageNumber: 1,
      pullDownRefresh: {
        threshold: 90,
        stop: 50
      }
    }
  },
  computed: {
    ...mapState({
      loading: state => {
        return state['@@loading'].effects['list/loadMore']
      }
    })
  },
  created () {
    this.onLoad()
  },
  methods: {
    ...mapActions('list', ['initData', 'plusPage']),
    loadData (type) {
      setTimeout(() => {
        const { page, pageNumber } = this
        this.$store.dispatch('list/loadMore', {
          type,
          page,
          pageNumber
        }).then(res => {
          this.data = res.data.concat(this.data)
          if (page > pageNumber) {
            this.$refs.scroll.forceUpdate('up', false)
          }
          this.$refs.scroll.forceUpdate('up', true)
          this.plusPage()
          this.$refs.scroll.forceUpdate('down', true)
        })
      }, 1000)
    },
    onLoad () {
      this.loadData('loadMore')
    },
    scroll () {},
    onRefresh () {
      this.initPage().then(() => {
        this.requestData('refresh')
      })
    }
  },
  activated () {
    this.$refs.scroll.refresh()
  }
}
</script>

<style scoped lang="sass">
.scroll-wrap
  ul
    li
      box-sizing: content-box
      font-size: 32px
      height: 50px
      line-height: 50px
      text-align: justify
      background: #ffffff
      color: #444
      overflow: hidden
      text-overflow: ellipsis
      white-space: nowrap
      padding: 10px 16px
      &:nth-child(2n)
        background: #f5f5f5

</style>
