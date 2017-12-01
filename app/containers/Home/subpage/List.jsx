import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getListData } from '../../../fetch/home/home'
import HomeList from '../../../components/List'
import LoadMore from '../../../components/LoadMore'

import './style.less'

class List extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      data: [],
      page: 0,
      hasMore: false,
      isLoadingMore: false
    }
  }
  render() {
    return (
      <div>
        <h3 className='home-list-title'>猜你喜欢</h3>
        {
          this.state.data.length
          ? <HomeList data={this.state.data}/>
          : <div>加载中...</div>
        }
        {
          this.state.hasMore
          ? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)}/>
          : ''
        }
      </div>
    )
  }

  componentDidMount(){
    console.log(this.props.cityName);
    // 获取列表数据
    this.getList()
  }

  getList(){
    const result = getListData(this.props.cityName, this.state.page)
    this.dataHandle(result)
  }

  loadMoreData(){
    var page = this.state.page;
    this.setState({
      isLoadingMore: true,
      page: page+1
    })
    this.getList()
  }

  dataHandle(result){

    result.then(res => {
      return res.json()
    }).then(json => {
      console.log(json)
      const hasMore = json.hasMore
      const data = json.data

      this.setState({
        hasMore: hasMore,
        data: this.state.data.concat(data),
        isLoadingMore: false
      })
    }).catch(e => {
      if(__DEV__) {
        console.error('首页列表模块获取数据报错，', e.message)
      }
    })
  }
}

// 使用require.ensure 异步加载，还不支持ES6 的 export
//export default City
module.exports = List
