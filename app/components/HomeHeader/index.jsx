import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link } from 'react-router'

import './style.less'

class HomeHeader extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    return (
      <div className='home-header'>
        <div className='left-cont fl'>
          <Link to='/city'>
            <span>{this.props.userinfo.cityName}</span>
            <i className='icon-down'></i>
          </Link>
        </div>
        <Link to='/search/all' className='search-cont'>
          <i className='icon-search'></i>
          <input className='seearch-put icon-search' placeholder='请输入关键字' />
        </Link>
        <div className='right-cont fr'>
            <Link to='/login'>
                <i className='icon-user'></i>
            </Link>
        </div>
      </div>
    )
  }
}

// 使用require.ensure 异步加载，还不支持ES6 的 export
//export default City
module.exports = HomeHeader
