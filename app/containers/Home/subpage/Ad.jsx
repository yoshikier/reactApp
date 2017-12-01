import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getAdData } from '../../../fetch/home/home'
import HomeAd from '../../../components/HomeAd'

class Ad extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      data: []
    }
  }
  render() {
    return (
      <div>
      {
        this.state.data.length
        ? <HomeAd data={this.state.data}/>
        : <div>加载中...</div>
      }
      </div>
    )
  }

  componentDidMount(){
    // 获取广告数据
    const result = getAdData();
    result.then(res => {
      return res.json()
    }).then(json => {
      const data = json
      console.log(data);
      if(data.length){
        this.setState({
          data: data
        })
      }
    }).catch(e => {
      if(__DEV__) {
        console.error('首页广告模块获取数据报错，', e.message)
      }
    })
  }
}

// 使用require.ensure 异步加载，还不支持ES6 的 export
//export default City
module.exports = Ad
