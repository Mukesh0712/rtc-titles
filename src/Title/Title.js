import './Title.css';

function Title(props){
    return(
        <div className='title'>
            <p className='text'>
                {props.text}
                {props.amount}
                <span className='play'>▶</span>
            </p>
        </div>
    )
}

export default Title;