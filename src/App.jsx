import './App.css'
import Badge from './components/Badge/Badge'
import Banner from './components/Banner/Banner'
import { FaCheckCircle, FaExclamationTriangle, FaWindowClose, FaInfoCircle } from "react-icons/fa"

function App() {

  return (
    <>
      <h1>React Components</h1>
      <div className="container">
        <div className="col">
        <h2>Badges</h2>
        <h3>Square Badges</h3>
          <Badge shape="square" color="gray">Badge</Badge>&nbsp;
          <Badge shape="square" color="red">Badge</Badge>&nbsp;
          <Badge shape="square" color="yellow">Badge</Badge>&nbsp;
          <Badge shape="square" color="green">Badge</Badge>&nbsp;
          <Badge shape="square" color="blue">Badge</Badge>&nbsp;
          <Badge shape="square" color="indigo">Badge</Badge>&nbsp;
          <Badge shape="square" color="purple">Badge</Badge>&nbsp;
          <Badge shape="square" color="pink">Badge</Badge>&nbsp;
          <h3>Pill Badges</h3>
          <Badge shape="pill" color="gray">Badge</Badge>&nbsp;
          <Badge shape="pill" color="red">Badge</Badge>&nbsp;
          <Badge shape="pill" color="yellow">Badge</Badge>&nbsp;
          <Badge shape="pill" color="green">Badge</Badge>&nbsp;
          <Badge shape="pill" color="blue">Badge</Badge>&nbsp;
          <Badge shape="pill" color="indigo">Badge</Badge>&nbsp;
          <Badge shape="pill" color="purple">Badge</Badge>&nbsp;
          <Badge shape="pill" color="pink">Badge</Badge>&nbsp;
          </div>
      
        <div className="col"> 
        <h2>Banners</h2>
          <div className="banners-container">
              <div className="multi-line-banners">
              <h3>Multi-line Banners</h3>
              <Banner status="success" title="Congratulations!" icon={<FaCheckCircle />}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner>
              <Banner status="warning" title="Attention" icon={<FaExclamationTriangle />}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.</Banner>
              <Banner status="error" title="There is a problem with your application" icon={<FaWindowClose />}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.</Banner>
              <Banner status="neutral" title="Update available" icon={<FaInfoCircle/>}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner>
            </div>
            
            <div className="single-line-banners">
            <h3>Single-line Banners</h3>
            <Banner status="success" title="Congratulations!" icon={<FaCheckCircle />}></Banner>
            <Banner status="warning" title="Attention" icon={<FaExclamationTriangle />}></Banner>
            <Banner status="error" title="There is a problem with your application" icon={<FaWindowClose />}></Banner>
            <Banner status="neutral" title="Update available" icon={<FaInfoCircle/>}></Banner>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
