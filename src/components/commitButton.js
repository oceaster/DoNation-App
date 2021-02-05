import './commitButton.css'
import { navbarSelectViewProfile } from '../apps/header/header.js'
import { fetchMyPledges } from '../apps/profile/profile.js'

const commitPledge = (confirmInput, postInput) => {
    return <button
        id='commit-button'
        onClick={() => {
            if (confirmInput()) {
                postInput()
                navbarSelectViewProfile()
                fetchMyPledges()
            }
        }}
    > Commit Pledge </button>
}

export default commitPledge
