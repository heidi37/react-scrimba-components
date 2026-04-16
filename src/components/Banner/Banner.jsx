import { FaCheckCircle, FaExclamationTriangle, FaWindowClose, FaInfoCircle } from "react-icons/fa"

const Banner = ({children, title, status}) => {
  const icons = {
    success: <FaCheckCircle />,
    warning: <FaExclamationTriangle />,
    error: <FaWindowClose />,
    neutral: <FaInfoCircle />
  }
  return (
    <div className={`banner ${status}`}>
      <div className="icon">{icons[status]}</div>
      <div>
        <p><strong>{title}</strong></p>
        <p>{children}</p></div>
    </div>
  )
}

export default Banner
