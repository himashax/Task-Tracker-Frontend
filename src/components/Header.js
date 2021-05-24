import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({title, onAdd, showAddTask}) => {

    return (
        <header>
            <h1 className='header'>{title}</h1>
            <Button color={showAddTask ? 'red' : 'black'} text={showAddTask ? 'Close' : 'Add'} onClick={onAdd}/>
        </header>
    )
}

//default properties will be overidden by non default properties.
Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string,
}

export default Header
