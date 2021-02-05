import './commitButton.css'
import { navbarSelectViewProfile } from '../apps/header/header.js'

const commitPledge = (confirmInput, postInput) => {
    return <button
        id='commit-button'
        onClick={() => {
            if (confirmInput()) {
                postInput()
                navbarSelectViewProfile()
            }
        }}
    > Commit Pledge </button>
}

export default commitPledge
