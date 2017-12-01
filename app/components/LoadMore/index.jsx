import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class LoadMore extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    return (
      <div className='load-more' ref='wrapper'>
        {
          this.props.isLoadingMore
          ? <span>加载中</span>
          : <span onClick={this.loadMoreHandle.bind(this)}>加载更多</span>
        }
      </div>
    )
  }

  componentDidMount(){
    const loadMoreFn = this.props.loadMoreFn
    const wrapper = this.refs.wrapper
    let t
    // 节流控制
    function callback(){
      const top = wrapper.getBoundingClientRect().top
      const windowHeight = window.screen.height
      if(top && top < windowHeight){
        loadMoreFn()
      }
    }
    window.addEventListener('scroll', function(){
      if(t){
        clearTimeout(t)
      }
      t = setTimeout(callback,100)
    })
  }

  loadMoreHandle(){
    this.props.loadMoreFn();
  }
}

// 使用require.ensure 异步加载，还不支持ES6 的 export
//export default City
module.exports = LoadMore
