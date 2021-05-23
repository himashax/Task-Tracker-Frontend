import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({title}) => {

    const onClick = (e) => {
        console.log('button clicked')
    }

    return (
        <header>
            <h1 className='header'>{title}</h1>
            <Button color={'black'} text={'Add'} onClick={onClick}/>
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
