import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {getInfoData} from '../../../fetch/detail/detail'
import DetailInfo from '../../../components/DetailInfo'

class Info extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            info: false
        }
    }
    render() {
        return (
            <div>
                {this.state.info
                    ? <DetailInfo info={this.state.info}></DetailInfo>
                    : <div>加载中</div>
                }
            </div>
        )
    }
    componentDidMount() {
        this.getInfo()
    }

    getInfo() {
        const id = this.props.id
        const result = getInfoData(id)
        result.then(res => {
            return res.json()
        }).then(json => {
            console.log(json)
            this.setState({info: json})
        }).catch(e => {
            if (__DEV__) {
                console.error('详情页获取数据报错，', e.message)
            }
        })
    }
}

// 使用require.ensure 异步加载，还不支持ES6 的 export
//export default City
module.exports = Info
