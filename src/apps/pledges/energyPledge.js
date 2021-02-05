import './pledges.css'
import commitPledge from '../../components/commitButton.js'

const confirmInput = () => {
    const supply = document.getElementById('my-energy-supplier').value
    if (supply === 'none') {
        alert('select your energy supplier')
        return false
    }
    const people = document.getElementById('people-in-house').value
    if (people === '') {
        alert('input the number of people in your home')
        return false
    }
    const source = document.getElementById('my-heating-type').value
    if (source === 'none') {
        alert('select your main source of heating')
        return false
    }
    return true
}

const onChange = () => {
    document.getElementById('co2-saved').innerText = calculateCO2() + 'kg'
}

const calculateCO2 = () => {
    const supply = document.getElementById('my-energy-supplier').value
    if (supply === 'none') {
        return '--'
    }
    const people = document.getElementById('people-in-house').value
    if (people === '') {
        return '--'
    }
    const source = document.getElementById('my-heating-type').value
    if (source === 'none') {
        return '--'
    }
    const result = 49 * source * people * supply
    return result
}

const heatingSource = () => {
    return <select
            id='my-heating-type'
            defaultValue='none'
            onClick={onChange}
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
        onBlur={onChange}
    />
}

const energySupplier = () => {
    return <select
            id='my-energy-supplier'
            defaultValue='none'
            onClick={onChange}
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
        {commitPledge(confirmInput)}
    </div>
}

export default energyPledge
