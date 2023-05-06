// Write your code here
import {Component} from 'react'
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
// import MdInfo from 'react-icons/md'

import Notification from '../Notification'

import './index.css'

class AlertNotifications extends Component {
  render() {
    return (
      <div className="app-container">
        <h1 className="heading-notification">Alert Notifications</h1>
        <div className="flex-container">
          <AiFillCheckCircle className="icon-url bg-color1" />
          <Notification
            className="green"
            description="You can access all the files in the folder"
            heading="Success"
          />
        </div>
        <div className="flex-container">
          <RiErrorWarningFill className="icon-url bg-color2" />
          <Notification
            className="red"
            description="Sorry, you are not authorized to have access to delete the file"
            heading="Error"
          />
        </div>
        <div className="flex-container">
          <MdWarning className="icon-url bg-color3" />
          <Notification
            className="yellow"
            description="Viewers of this file can see comments and suggestions"
            heading="Warning"
          />
        </div>
        <div className="flex-container">
          <MdInfo className="icon-url bg-color4" />
          <Notification
            className="blue"
            description="Anyone on the internet can view these files"
            heading="Info"
          />
        </div>
      </div>
    )
  }
}
export default AlertNotifications
