import './index.css'
import {GrFormClose} from 'react-icons/gr'

const Notification = props => {
  const {heading, description, className} = props

  return (
    <div className="list-container">
      <div className="grid">
        <h1 className={className}>{heading}</h1>
        <p className="info-heading">{description}</p>
      </div>
      <GrFormClose className="icon-url" />
    </div>
  )
}
export default Notification
