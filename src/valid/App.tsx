import React, { Suspense } from 'react';
import './App.css';
import testImg from './test.png?url'
// const Bar = React.lazy(() => import("./Bar"))

const App = () => {
  const [show, setShow] = React.useState(false)
  const Component = React.useRef<any>(null)
  const click = () => {

    // 下面这一行正常运行，而且图片 retry 也正常
    import(/* webpackChunkName: "bar" */ './Bar').then(mod => {
    // 下面这一行会报错，更改注释似乎触发了不同的缓存，导致报错偶现，但是总的来说，这是会报错的
    // import('./Bar').then(mod => {
      console.log(mod.default)
      setShow(!show)
      Component.current = mod.default
    })
  }

  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <p className='text-3xl underline text-red-500'>Start building amazing things with Rsbuild.</p>
      <img src={testImg} />
      <div>
        <button onClick={click} type='button'>加载bar组件</button>
      </div>
      {/* {show && <Suspense>
        <Bar />
      </Suspense>
      } */}
      {show && Component.current && Component.current() }
    </div>
  );
};

export default App;
