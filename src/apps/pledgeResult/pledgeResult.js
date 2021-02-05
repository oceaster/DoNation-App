import './pledgeResult.css'
import Co2img from '../../assets/icons/co2.svg'

const co2Result = (amount) => {
    return <div style={{display:'flex'}}>
        <h2 id='co2-saved' style={{color:'peru'}}>{amount}</h2>
        <h3>&nbsp; of CO₂</h3>
    </div>
}

const pledgeResult = () => {
    return <div id='pledge-results'>
        <h2> Saves </h2>
        <div id='pledge-saves'>
            {co2Result('--kg')}
        </div>
        <h2> Impacts </h2>
        <div id='pledge-impacts'>
            <img alt='co2' src={Co2img} width='48px' height='48px' />
        </div>
    </div>
}

export default pledgeResult
