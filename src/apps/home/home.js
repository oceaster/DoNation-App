import './home.css'
import serverAdr from '../../library/server.js'
import co2img from '../../assets/icons/co2.svg'

const total_co2_saved = () => {
    fetch(`${serverAdr}api/total/co2`)
    .then(res => {
        res.json().then(data => {
            const el = document.getElementById('co2-saved-total')
            el.innerText = data['save_co2__sum'] + 'kg'
        })
    })
}

const Home = () => {
    return <div>
        <div className='saved-total-section'>
            <img alt='co2' src={co2img} /><h4> Total CO₂ Saved </h4>
        </div>
        <h2 id='co2-saved-total' className='saved-total'> -- </h2>
        <div className='saved-total-section'>
            <img alt='co2' src={co2img} /><h4> Total Water Saved </h4>
        </div>
        <h2 className='saved-total'> -- </h2>
        <div className='saved-total-section'>
            <img alt='co2' src={co2img} /><h4> Total Waste Saved </h4>
        </div>
        <h2 className='saved-total'> -- </h2>
        {total_co2_saved()}
    </div>
}

export default Home
