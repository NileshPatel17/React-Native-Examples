import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHome, faSearch, faClock, faCog } from '@fortawesome/free-solid-svg-icons'

const icons = {
    home: faHome,
    search: faSearch,
    planning: faClock,
    settings: faCog
}

const Icon = ({ name, color }) => {
    return (
        <FontAwesomeIcon icon={icons[name]} style={{ color: color }} />
    )
}

export default Icon