import { IoCloudUploadOutline } from "react-icons/io5";

const Card = ({title, text}) => {
  return (
    <div className="card">
      <div className="card-icon">
        <IoCloudUploadOutline />
      </div>
        <div className="card-body">
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
    </div>
  )
}

export default Card
