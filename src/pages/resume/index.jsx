import React, { Component } from 'react'
import { View } from '@tarojs/components'
import { connect } from 'react-redux'

import { add, minus, asyncAdd } from '../../actions/counter'
import AtButton from 'taro-ui'

import './index.scss'


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
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <View>RESUME</View>
        {/* <AtAvatar image='https://jdc.jd.com/img/200'></AtAvatar> */}
        <AtButton type='primary'>按钮文案</AtButton>
      </View>
    )
  }
}

export default Index

