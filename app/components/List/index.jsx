import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Item from './Item'

import './style.less'

class List extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    return (
      <div className='list-content'>
        <ul className='clearfix'>
          {this.props.data.map((item, index) => {
            return <Item data={item} key={index}/>
          })}
        </ul>
      </div>
    )
  }
}

// 使用require.ensure 异步加载，还不支持ES6 的 export
//export default City
module.exports = List
