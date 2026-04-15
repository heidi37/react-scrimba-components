const Banner = ({children, title, icon, status}) => {
  return (
    <div className={`banner ${status}`}>
      <div className="icon">{icon}</div>
      <div>
        <p><strong>{title}</strong></p>
        <p>{children}</p></div>
    </div>
  )
}

export default Banner
