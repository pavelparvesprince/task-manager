import PropTypes from 'prop-types'
import Button from './Button';

const Header = ({title}) => {

    const onClickBtn = () => {
        console.log("Clicked")
    }

    return (
        <header className='header'>
            <h1> {title}</h1>
            <Button color="green" text="Add" onClick={onClickBtn}></Button>
        </header>
    )
}

// set props type here
// also can add required option
Header.propTypes = {
    title : PropTypes.string.isRequired
}

// default props value can be set here 
Header.defaultProps = {
    title: 'Task Tracker'
}

// CSS js is here
// const headerStyle ={
//     color: 'red', 
//     backgroundColor: 'black'
// }


export default Header
