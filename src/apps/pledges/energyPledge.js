import './pledges.css'
import commitPledge from '../../components/commitButton.js'

const onCommit = () => {
    document.getElementById('co2-saved').innerText = calculateCO2() + 'kg'
}

const calculateCO2 = () => {
    const supply = document.getElementById('my-energy-supplier').value
    if (supply === 'none') {
        alert('select your energy supplier')
        return '--'
    }
    const people = document.getElementById('people-in-house').value
    if (people === '') {
        alert('enter number of people in your house')
        return '--'
    }
    const source = document.getElementById('my-heating-type').value
    if (source === 'none') {
        alert('select your type of heating')
        return '--'
    }
    const result = 49 * source * people * supply
    return result
}

const heatingSource = () => {
    return <select
            id='my-heating-type'
            defaultValue='none'
        >
        <option value='none' disabled> --- </option>
        <option value='3'> Electric </option>
        <option value='5'> Gas </option>
        <option value='5'> Oil </option>
    </select>
}

const numberOfPeople = () => {
    return <input
        id='people-in-house'
        type='number'
        placeholder='4'
        min='1'
    />
}

const energySupplier = () => {
    return <select
            id='my-energy-supplier'
            defaultValue='none'
        >
        <option value='none' disabled> --- </option>
        <option value='0.5'> Bog Standard </option>
        <option value='0'> Great Green </option>
        <option value='1'> Other </option>
    </select>
}

const energyPledge = () => {
    return <div id='pledge_energy'>
        <p>
            Within the next two
            months, I pledge to
            switch from my
            current energy
            supplier
            – which is
            {energySupplier()}
            – to
            a green energy
            supplier.
            <br/><br/>
            {numberOfPeople()}
            people live in our
            home.
            <br/><br/>
            My house is
            mainly heated by
            {heatingSource()}.
        </p>
        {commitPledge(onCommit)}
    </div>
}

export default energyPledge
