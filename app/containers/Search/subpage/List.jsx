import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { getListData } from '../../../fetch/home/home'
import SearchList from '../../../components/List'
import LoadMore from '../../../components/LoadMore'

import './style.less'

const initState = {
  data: [],
  page: 0,
  hasMore: false,
  isLoadingMore: false
}

class List extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = initState;
  }
  render() {
    return (
      <div>
        {
          this.state.data.length
          ? <SearchList data={this.state.data}/>
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

    // 获取列表数据
    this.getList()
  }

  componentDidUpdate(prevProps, prevState){

    const category = this.props.category
    const keyword = this.props.keyword

    if(category === prevProps.category && keyword === prevProps.keyword){
      return
    }

    this.setState(initState,function(){
      this.getList()
    })

  }

  getList(){
    const cityName = this.props.userinfo.cityName
    const page = this.state.page
    const category = this.props.category
    const keyword = this.props.keyword ? this.props.keyword : ''
    console.log(cityName + '--' + page + '--' + category + '--' + keyword)
    const result = getListData(cityName, page, category, keyword)
    this.dataHandle(result)
  }

  loadMoreData(){
    const page = this.state.page;
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

function mapStateToProps(state){
  return {
    userinfo: state.userinfo
  }
}

function mapDispatchToProps(dispatch){
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)
