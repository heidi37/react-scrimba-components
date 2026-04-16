const Testimonial = ({logo, quote, name, title}) => {
  return (
    <div className="testimonial">
      <img src={logo}></img>
      <p className="testimonial-quote">"{quote}"</p>
      <p><span className="testimonial-name">{name}</span><span className="testimonial-slash"> / </span><span className="testimonial-title">{title}</span></p>
    </div>
  )
}

export default Testimonial
