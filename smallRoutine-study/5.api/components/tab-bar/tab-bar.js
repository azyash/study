// components/tab-bar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    activeIndex:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    activeClick(event){
      const index = event.currentTarget.dataset.index
      this.setData({
        activeIndex: index
      })
      this.triggerEvent('itemclick',{index,title:this.properties.titles[index]})
    }
  }
})
