import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class Header extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    return (
      <div className='m-header'>
        <span className='back absolute' onClick = {this.goBack.bind(this)}></span>
        <h1>{this.props.headerTitle}</h1>
      </div>

    )
  }

  goBack() {
    history.go(-1)
  }
}

// 使用require.ensure 异步加载，还不支持ES6 的 export
//export default City
module.exports = Header
