import React from 'react'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import PersonIcon from '@material-ui/icons/Person'
import ContactIcon from '@material-ui/icons/ContactMail'
import WorkIcon from '@material-ui/icons/Work'
import ResumeIcon from '@material-ui/icons/Description'
import './LabelBottomNavigation.css'
import { withRouter } from "react-router-dom"

class LabelBottomNavigation extends React.Component {
  state = {
    value: '',
  }

  handleChange = (event, value) => {
    console.log('value',value)
    this.setState({ value })
    this.props.history.push(`/${value}`)
  }

  render() {
    const { value } = this.state

    return (
      <BottomNavigation value={value} onChange={this.handleChange} showLabels>
        <BottomNavigationAction label="About me" value="" icon={<PersonIcon />} />
        <BottomNavigationAction label="Projects" value="projects" icon={<WorkIcon />} />
        <BottomNavigationAction label="Resume" value="resume" icon={<ResumeIcon />} />
        <BottomNavigationAction label="Contact me" value="contact" icon={<ContactIcon />} />
      </BottomNavigation>
    )
  }
}

export default withRouter(LabelBottomNavigation)