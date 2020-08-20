import React from 'react'
import Loadable from 'react-loadable'
const Loading=()=>{
    return <h1>加载中。。。。。</h1>
}

const LoadableComponent = (component, haveLoading = true, ) => {
    // console.log(component)
    console.log(component)
    return Loadable({
        loader: () => component,
        loading: () => {
            if (haveLoading) {
                return <Loading style={{ background: 'none', height: 'calc(100vh - 173px)' }} />
            }
            return null
        }
    })
}


export default LoadableComponent


