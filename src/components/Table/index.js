/* eslint-disable no-lone-blocks */
import React, { Component } from 'react'
import { Table, Col, Pagination,Button } from 'antd';
import { component } from '@/components/dragTable';
import './index.scss';
import { T } from 'antd/lib/upload/utils';

/**
 * dataSource | Array 表格数据    必填
 * columns | Array   表头       必填
 * type | number 必填
 * 
 * type==1 最基本的表格，不能拖拽，没有筛选，没有checkbox
 * 
 * 
 * type==2  可选中
 * rowSelection | object
 * rowSelection的子项   ↓
 * 1.onChange(selectedRowKeys, selectedRows) | function  选中项发生变化时的回调
 * 2.type | string 单选或多选 checkbox radio, 默认值checkbox
 * 3.selectedRowKeys | Array 默认选中的值 加上此属性后会使table完全变成受控组件  
 * 
 * 
 * type==3  列表可展开收起 受控组件 
 * expandedRowKeys | Array 默认展开的项  必填
 * expandIcon | function 自定义展开图标    展开收起需要提供方法，定义在图标上  必填
 * expandedRowRender | function   	额外的展开行 必填
 * 
 * isDrab | boolean 需要拖拽表格时需加该属性
 * moveRow | function 拖拽的方法
 * scroll | object 表格是否可滚动  
 */


export default class index extends Component {
    change = () => {

    }
    render() {
        let { isDrab, options } = this.props;
        return (
            <Table
            className='global_table'
                rowKey={v => v.id}
                components={isDrab ? component : 1}
                {...options}
            />
        )
    }
}



