import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { hashHistory } from 'react-router'
import configureStore from './store/configureStore'
import remRatio from './util/rem'

import './static/css/common.less'
// import './static/css/font.css'

// 创建 Redux 的 store 对象
const store = configureStore()

import RouteMap from './router/routeMap'

//rem缩放
remRatio(window);

render(
    <Provider store={store}>
        <RouteMap history={hashHistory}/>
    </Provider>,
    document.getElementById('root')
)
