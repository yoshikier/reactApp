import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class SearchInput extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    return (
      <div className='search-cont'>
        <i className='icon-search'></i>
        <input className='seearch-put icon-search' placeholder='请输入关键字' onBlur = {this.getValHandle.bind(this)} />
      </div>
    )
  }

  getValHandle(e) {
    this.props.setval(e.target.value)
  }
}

// 使用require.ensure 异步加载，还不支持ES6 的 export
//export default City
module.exports = SearchInput
