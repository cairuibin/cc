/* eslint-disable react/react-in-jsx-scope */
import React, { Component } from 'react';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');


export default (Com) => {
    return class extends Component {
        render() {
            return <ConfigProvider locale={zhCN}>
                <Com />
            </ConfigProvider>
        }
    }
}