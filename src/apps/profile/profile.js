import './profile.css'
import serverAdr from '../../library/server.js'

const makePledge = (id, content, co2, timestamp) => {
    return `<div
        id=${id}
        class='pledge_entry'
    >
        <p> ${content} </p>
        <h4> Saved ${co2}kg of CO2 </h4>
        <h6> ${timestamp} </h6>
    </div>`
}

const fetchMyPledges = () => {
    fetch(`${serverAdr}api/fetch/0`)
    .then(res => {
        res.json().then(data => {
            if ('data' in data) {
                const pledges = data['data']
                const pledgesEl = document.getElementById('my_pledges')
                for (const obj in pledges) {
                    console.log(pledges[obj])
                    pledgesEl.innerHTML += makePledge(
                        pledges[obj]['id'],
                        pledges[obj]['pledge'],
                        pledges[obj]['co2'],
                        pledges[obj]['timestamp'].split('T')[0]
                    )
                }
            }
        })
    })
}

const Profile = () => {
    return <div>
        <div id='my_pledges'>
            {fetchMyPledges()}
        </div>
    </div>
}

export default Profile
