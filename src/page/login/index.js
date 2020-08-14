import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Input, Button, Checkbox, message } from 'antd'
import { withRouter, Link } from 'react-router-dom'
import { LOGIN_SUBMITFN } from '../../store/OBS/login/action'
import { login } from '../../api/login'
import md5 from "js-md5"
import './index.less'
const FormItem = Form.Item
class Login extends Component {

    handleSubmit = e => {
        e.preventDefault()
        this.props.form.validateFields(async (err, values) => {
            console.log(values)
            const userName = values.userName
            const password = md5(values.password)

            if (!err) {

                login({
                    userName: userName,
                    password: password,
                    identification: "pxxt"
                }).then(res => {
                    this.resetUserInfo(res, values)
                })

            }
        })
    }
    resetUserInfo(res, values) {
        const userInfo = res
        if (userInfo) {
            if (userInfo.user.reviewStatus === '0' || userInfo.user.reviewStatus === '２') {
                message.error("未通过审核！")
                return
            } else {
                this.props.setUserInfo(Object.assign({}, userInfo))
                this.props.history.replace('/home')
            }
        }
    }
    render() {
        const { getFieldDecorator } = this.props.form
        return (

            <Form className="login_form" onSubmit={this.handleSubmit}>
                <FormItem className='form_it'>
                    <p>用户名</p>
                    {getFieldDecorator(
                        "userName",
                        {
                            rules: [{ required: true, message: "请输入账号!" }, {
                                max: 20,
                                message: "用户名不能超过20位"
                            },
                            {
                                pattern: /^(?=.*[A-Za-z])[A-Za-z\d]{0,20}$|^1[3456789]\d{9}/,
                                message: '用户名不符'
                            }],
                            initialValue: localStorage.userName || ''
                        },
                    )(
                        <Input
                            allowClear
                            maxLength={20}
                            placeholder={this.props.userFlag ? "用户名" : "请输入手机号"}
                        />
                    )}
                </FormItem>
                <FormItem className='form-it form-it-last'>
                    <p>密码</p>
                    {getFieldDecorator(
                        "password",
                        {
                            rules: [{ required: true, message: "请输入密码!" }],
                            initialValue: localStorage.password || ''
                        },

                    )(
                        <Input
                            allowClear
                            maxLength={20}
                            style={{ width: !this.props.userFlag ? 150 : '100%' }}
                            type={this.props.userFlag ? 'password' : 'text'}
                            placeholder={this.props.userFlag ? "密码" : "请输入验证码"}
                        />
                    )}
                </FormItem>

                <FormItem>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: localStorage.getItem('ischecked') == 1 ? true : false,
                    })(
                        <Checkbox

                            onChange={this.onChangeRemember}

                        >记住密码</Checkbox>
                    )}
                </FormItem>

                <FormItem>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="login_form_button"
                        onSubmit={this.handleSubmit}
                    >
                        登录
                      </Button>

                </FormItem>
                <div className="login_mainwarp">
                    <div className="text_span"><Link to="/registered">申请注册</Link></div>
                    <p onClick={() => this.props.history.push('/forget')} className='forget_password'>忘记密码</p>
                </div>

            </Form>
        )
    }
}

const mapStateToProps = ({ LOGIN }) => {
    return {
        userFlag: LOGIN.userFlag,
        uname: LOGIN.uname,
        pwd: LOGIN.pwd
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUserInfo(data) {
            dispatch(LOGIN_SUBMITFN(data))
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Form.create()(Login)))