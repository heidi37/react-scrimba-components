import icon from '/src/assets/quote-icon.png'

const TestimonialPic = ({image, quote, name, title}) => {
  return (
    <div className="testimonial-pic">
      <div><img className="quoted" src={image}></img></div>
      <div>
        <img src={icon}></img>
      <p className="testimonial-pic-quote">"{quote}"</p>
      <p className="testimonial-pic-name">{name}<br></br>
      <span className="testimonial-pic-title">{title}</span></p>
      </div>
    </div>
  )
}

export default TestimonialPic