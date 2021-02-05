import './pledgeSelect.css'
import energyPledge from '../pledges/energyPledge.js'
import dietPledge from '../pledges/dietPledge.js'
import { render } from 'react-dom'

const pledges = {
    'pledge_energy': energyPledge,
    'pledge_diet': dietPledge
}

const addPledge = () => {
    const selection = document.getElementById('pledge-select')
    const myPledgesEl = document.getElementById('my-pledges')
    if (selection.value !== 'none')
        render(pledges[selection.value](), myPledgesEl)
}

const pledgeType = (pledgeName) => {
    const thisValue = 'pledge_' + pledgeName.replace(/ /g, "_")
    return <option value={thisValue}>
        {pledgeName}
    </option>
}

const selectPledgeType = () => {
    return <select
        id='pledge-select'
        style={{width:'100%'}}
        onClick={addPledge}
        defaultValue='none'
    >
        <option value='none' disabled> --- select --- </option>
        {pledgeType('energy')}
        {pledgeType('diet')}
    </select>
}

const PledgeSelect = () => {
    return <div id='pledge-section'>
        <h2> Make Pledge </h2>
        {selectPledgeType()}
        <div id='my-pledges' />
    </div>
}

export default PledgeSelect
