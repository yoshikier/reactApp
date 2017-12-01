import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import SearchHeader from '../../components/SearchHeader'
import List from './subpage/List'

class Search extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    const params = this.props.params
    return (
      <div>
        <SearchHeader category = {params.category}/>
        <List category = {params.category} keyword = {params.keyword}/>
      </div>
    )
  }
}

// 使用require.ensure 异步加载，还不支持ES6 的 export
//export default City
module.exports = Search
