import React, { Suspense } from 'react';
import './App.css';
// import testImg from './test.png?url'
const Bar = React.lazy(() => import('./Bar'))

const App = () => {
  const [show, setShow] = React.useState(false)
  // const ComponentRef = React.useRef<any>(null)
  const click = () => {
    setShow(true)
    // import(/* webpackChunkName: "bar" */ './Bar').then(mod => {
    //   setShow(true)
    //   console.log(mod.default, typeof mod.default)
    //   // ComponentRef.current = mod.default
    // })
  }

  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <p className='text-3xl underline text-red-500'>Start building amazing things with Rsbuild.</p>
      {/* {show && ComponentRef.current()} */}
      <Suspense>
      { show && <Bar />}
      </Suspense>
      <div>
        <button onClick={click} type='button'>加载动态图片</button>
      </div>
    </div>
  );
};

export default App;
