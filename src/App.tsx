import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
    const [value, setValue] = useState<number>(0)


    useEffect(() => {
        let valueAsString = localStorage.getItem('counterValue')

        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setValue(newValue)
        }
    }, [])


    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(value))
    }, [value])

    const incHandler = () => {
        setValue(value + 1)
    }


    // const setToLocalStorage = () => {
    //     localStorage.setItem('counterValue', JSON.stringify(value))
    //     localStorage.setItem('counterValue + 1', JSON.stringify(value + 1))
    // }

    // const getToLocalStorage = () => {
    //     let valueAsString = localStorage.getItem('counterValue')
    //
    //     if (valueAsString) {
    //         let newValue = JSON.parse(valueAsString)
    //         setValue(newValue)
    //     }
    // }

    // const clearLocalStorage = () => {
    //     localStorage.clear()
    //     setValue(0)
    // }

    // const removeLocalStorage = () => {
    //     localStorage.removeItem('counterValue + 1')
    // }

    // const setSessionStorage = () => {
    //     sessionStorage.setItem('counterValue', JSON.stringify(value))
    // }


    return (
        <div className="App">
            <h1>LocalStorage</h1>
            <h2>{value}</h2>
            <button onClick={incHandler}>inc</button>

            {/*<button onClick={setToLocalStorage}>setToLocalStorage</button>*/}
            {/*<button onClick={getToLocalStorage}>getToLocalStorage</button>*/}
            {/*<button onClick={clearLocalStorage}>clearLocalStorage</button>*/}
            {/*<button onClick={removeLocalStorage}>clearLocalStorage</button>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<button onClick={setSessionStorage}>sessionStorage</button>*/}

        </div>
    );
}

export default App;
