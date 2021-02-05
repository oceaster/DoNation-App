import './commitButton.css'

const commitPledge = (onClickFunc) => {
    return <button
        id='commit-button'
        onClick={onClickFunc}
    > Commit Pledge </button>
}

export default commitPledge
