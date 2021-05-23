import PropTypes from 'prop-types'

const Header = ({title}) => {
    return (
        <header>
            <h1> {title} </h1>
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
