import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Button, Text } from '@tarojs/components'
import { AtTabBar, AtFloatLayout, AtRadio, AtFab } from 'taro-ui'
import { add, minus, asyncAdd } from '../../actions/counter'

import './index.scss'

const options = [
  { label: '狮子座', value: 'leo' },
  { label: '处女座', value: 'virgo' },
  { label: '天秤座', value: 'libra' },
  { label: '天蝎座', value: 'scorpio' },
  { label: '射手座', value: 'sagittarius' },
  { label: '摩羯座', value: 'capricorn' },
  { label: '水瓶座', value: 'aquarius' },
  { label: '双鱼座', value: 'pisces' },
  { label: '白羊座', value: 'aries' },
  { label: '金牛座', value: 'taurus' },
  { label: '双子座', value: 'gemini' },
  { label: '巨蟹座', value: 'cancer' }
]

const data = {
  name: "狮子座",/*星座名称*/
  datetime: "2014年06月27日",/*日期*/
  date: 20140627,
  all: "89", /*综合指数*/
  color: "古铜色", /*幸运色*/
  health: "95", /*健康指数*/
  love: "80",/*爱情指数*/
  money: "84",/*财运指数*/
  number: 8,/*幸运数字*/
  QFriend: "处女座",/*速配星座*/
  summary: "有些思考的小漩涡，可能让你忽然的放空，生活中许多的细节让你感触良多，五味杂陈，常常有时候就慢动作定格，想法在某处冻结停留，陷入一阵自我对话的沉思之中，这个时候你不喜欢被打扰或询问，也不想让某些想法曝光，个性变得有些隐晦。",/*今日概述*/
  work: "80",/*工作指数*/
  error_code: 0/*返回码*/
}

@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add () {
    dispatch(add())
  },
  dec () {
    dispatch(minus())
  },
  asyncAdd () {
    dispatch(asyncAdd())
  }
}))
class Index extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      current: 0,
      isOpened: false,
      value: 'leo'
    }
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide() { }
  
  handleClick(value) {
    this.setState({
      current: value
    })
  }

  handleModalToggle(value) {
    this.setState({
      isOpened: !this.state.isOpened
    })
  }

  handleChange(value) {
    console.log(value)
    this.setState({
      value
    })
  }

  render () {
    return (
      <View className='star'>
        <View class="day">
          <Text>综合指数</Text>
          <View class="day-all">{data.all}</View>
          <View class="day-grid at-row">
            <View className='at-col'>
              <View className="grid-ball">{data.health}</View>
              <Text>健康指数</Text>
            </View>
            <View className='at-col'>
              <View className="grid-ball">{data.love}</View>
              <Text>爱情指数</Text>
            </View>
            <View className='at-col'>
              <View className="grid-ball">{data.money}</View>
              <Text>财运指数</Text>
            </View>
          </View>
          <View className="day-summary">{data.summary}</View>
        </View>
        <AtTabBar
          fixed
          tabList={[
            { title: '日', icon: 'bullet-list' },
            { title: '周', icon: '\ue614' },
            { title: '月', icon: 'star' },
            { title: '年', icon: 'star' }
          ]}
          onClick={this.handleClick.bind(this)}
          current={this.state.current}
        />
        <AtFloatLayout isOpened={this.state.isOpened} title="选择你的星座" onClose={this.handleModalToggle.bind(this)}>
          <AtRadio
            options={options}
            value={this.state.value}
            onClick={this.handleChange.bind(this)}
          />
        </AtFloatLayout>
        <View class="fab-button">
          <AtFab onClick={this.handleModalToggle.bind(this)} type="secondary">{this.state.value}</AtFab>
        </View>
      </View>
    )
  }
}

export default Index

