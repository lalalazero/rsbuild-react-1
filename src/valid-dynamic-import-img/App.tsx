import React, { Suspense } from 'react';
import './App.css';
// import testImg from './test.png?url'

const App = () => {
  const [testImg, setTestImg] = React.useState<any>(null)
  const [show, setShow] = React.useState(false)
  const click = () => {
    import('./test.png?url').then(mod => {
      setShow(true)
      setTestImg(mod.default)
    })
  }

  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <p className='text-3xl underline text-red-500'>Start building amazing things with Rsbuild.</p>
      {show &&
        <img src={testImg} />}
      <div>
        <button onClick={click} type='button'>加载动态图片</button>
      </div>
    </div>
  );
};

export default App;
