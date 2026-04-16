import './App.css'
import Badge from './components/Badge/Badge'
import Banner from './components/Banner/Banner'
import Card from './components/Card/Card'
import Testimonial from './components/Testimonials/Testimonial'
import TestimonialPic from './components/Testimonials/TestimonialPic'
import logo from '../src/assets/workation-logo.png'
import image from '../src/assets/quote-photo.jpg'

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
          <h2>Cards</h2>
          <Card title="Easy Deployment" text="Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis."></Card>
          <h2>Testimonials</h2>
          <h3>No Pics</h3>
          <Testimonial logo={logo} quote="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis." name="May Andersons" title="Workcation, CTO"></Testimonial>
          <h3>With Pics</h3>
          <TestimonialPic image={image} quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. " name="May Andersons" title="Workcation, CTO"></TestimonialPic>
          </div>
      
        <div className="col"> 
        <h2>Banners</h2>
          <div className="banners-container">
              <div className="multi-line-banners">
              <h3>Multi-line Banners</h3>
              <Banner status="success" title="Congratulations!">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner>
              <Banner status="warning" title="Attention">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.</Banner>
              <Banner status="error" title="There is a problem with your application">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.</Banner>
              <Banner status="neutral" title="Update available">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner>
            </div>
            
            <div className="single-line-banners">
            <h3>Single-line Banners</h3>
            <Banner status="success" title="Congratulations!"></Banner>
            <Banner status="warning" title="Attention"></Banner>
            <Banner status="error" title="There is a problem with your application"></Banner>
            <Banner status="neutral" title="Update available"></Banner>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
