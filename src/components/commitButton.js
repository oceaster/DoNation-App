import './commitButton.css'
import { navbarSelectViewProfile } from '../apps/header/header.js'

const commitPledge = (confirmInput) => {
    return <button
        id='commit-button'
        onClick={() => {
            if (confirmInput())
                navbarSelectViewProfile()
        }}
    > Commit Pledge </button>
}

export default commitPledge
