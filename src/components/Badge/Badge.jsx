const Badge = ({children, shape, color}) => {
  return (
      <span className={`badge ${shape} ${color}`}>
        {children}
      </span>
  )
}

export default Badge
