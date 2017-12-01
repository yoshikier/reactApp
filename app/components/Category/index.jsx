import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link } from 'react-router'
import ReactSwipe from 'react-swipe'

import './style.less'

class Category extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {};
  }
  render() {
    var opt = {
      auto: 2000,
      callback: function(index){
        this.setState({
          index: index
        })
      }.bind(this)
    }
    return (
      <div className='category-content'>
        <ReactSwipe className="carousel" swipeOptions={opt}>
          <div>
              <ul>
                <li>
                  <Link to="/search/jingdian">
                    <div className='icon jingdian'></div>
                    <span>经典</span>
                  </Link>
                </li>
                <li>
                  <Link to="/search/ktv">
                    <div className='icon ktv'></div>
                    <span>KTV</span>
                  </Link>
                </li>
                <li>
                  <Link to="/search/gouwu">
                    <div className='icon gouwu'></div>
                    <span>购物</span>
                  </Link>
                </li>
                <li>
                  <Link to="/search/shenghuofuwu">
                  <div className='icon shenghuofuwu'></div>
                  <span>生活服务</span>
                  </Link>
                </li>
                <li>
                  <Link to="/search/jianshenyundong">
                  <div className='icon jianshenyundong'></div>
                  <span>健身运动</span>
                  </Link>
                </li>
                <li>
                  <Link to="/search/meifa">
                  <div className='icon meifa'></div>
                  <span>美发</span>
                  </Link>
                </li>
                <li>
                  <Link to="/search/qinzi">
                  <div className='icon qinzi'></div>
                  <span>亲子</span>
                  </Link>
                </li>
                <li>
                  <Link to="/search/xiaochikuaican">
                  <div className='icon xiaochikuaican'></div>
                  <span>小吃快餐</span>
                  </Link>
                </li>
                <li>
                  <Link to="/search/zizhucan">
                  <div className='icon zizhucan'></div>
                  <span>自助餐</span>
                  </Link>
                </li>
                <li>
                  <Link to="/search/jiuba">
                  <div className='icon jiuba'></div>
                  <span>酒吧</span>
                  </Link>
                </li>
              </ul>
          </div>
          <div>
            <ul>
              <li>
                <div className='icon meishi'></div>
                <span>美食</span>
              </li>
              <li>
                <div className='icon dianying'></div>
                <span>电影</span>
              </li>
              <li>
                <div className='icon jiudian'></div>
                <span>酒店</span>
              </li>
              <li>
                <div className='icon xiuxianyule'></div>
                <span>休闲娱乐</span>
              </li>
              <li>
                <div className='icon waimai'></div>
                <span>外卖</span>
              </li>
              <li>
                <div className='icon huoguo'></div>
                <span>火锅</span>
              </li>
              <li>
                <div className='icon liren'></div>
                <span>丽人</span>
              </li>
              <li>
                <div className='icon dujiachuxing'></div>
                <span>度假出行</span>
              </li>
              <li>
                <div className='icon zuliaoanmo'></div>
                <span>足疗按摩</span>
              </li>
              <li>
                <div className='icon zhoubianyou'></div>
                <span>周边游</span>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <div className='icon ribencai'></div>
                <span>日本菜</span>
              </li>
              <li>
                <div className='icon spa'></div>
                <span>SPA</span>
              </li>
              <li>
                <div className='icon jiehun'></div>
                <span>结婚</span>
              </li>
              <li>
                <div className='icon xuexipeixun'></div>
                <span>学习培训</span>
              </li>
              <li>
                <div className='icon xican'></div>
                <span>西餐</span>
              </li>
              <li>
                <div className='icon huochejipiao'></div>
                <span>火车机票</span>
              </li>
              <li>
                <div className='icon shaokao'></div>
                <span>烧烤</span>
              </li>
              <li>
                <div className='icon jiazhuang'></div>
                <span>家装</span>
              </li>
              <li>
                <div className='icon chongwu'></div>
                <span>宠物</span>
              </li>
              <li>
                <div className='icon quanbufenlei'></div>
                <span>全部分类</span>
              </li>
            </ul>
          </div>
        </ReactSwipe>
        <div className='control-bar'>
            <ul>
              <li className={this.state.index === 0 ? 'curr' : ''}></li>
              <li className={this.state.index === 1 ? 'curr' : ''}></li>
              <li className={this.state.index === 2 ? 'curr' : ''}></li>
            </ul>
        </div>
      </div>
    )
  }
}

// 使用require.ensure 异步加载，还不支持ES6 的 export
export default Category
