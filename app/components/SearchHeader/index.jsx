import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import SearchInput from '../SearchInput'
import {Link, hashHistory} from 'react-router'

import './style.less'

class SearchHeader extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      inputVal: ''
    }
  }
  render() {
    return (
      <div className='m-header'>
        <span className='back'><Link to='/'></Link></span>
        <SearchInput setval = {this.setInputVal.bind(this)}/>
        <span className='do-search' onClick = {this.clickHandle.bind(this)}>搜索</span>
      </div>
    )
  }

  clickHandle() {
    console.log(this.state.inputVal);
    hashHistory.push('/search/' + this.props.category +'/'+ encodeURIComponent(this.state.inputVal))
  }

  setInputVal(val) {
    this.setState({
      inputVal: val
    })
  }
}

// 使用require.ensure 异步加载，还不支持ES6 的 export
//export default City
module.exports = SearchHeader
