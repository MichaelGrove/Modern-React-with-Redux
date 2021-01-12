import React, { useState } from 'react'
import Header from './components/Header'
import Route from './components/Route'
import Accordion from './components/Accordion'
import Dropdown from './components/Dropdown'
import Search from './components/Search'
import Translate from './components/Translate'

const items = [
    { 'title': 'What is react?', content: 'React is' },
    { 'title': 'Why use react?', content: 'React is good' },
    { 'title': 'How do you use react?', content: 'Really well' },
]

const options = [
    { label: 'The color blue', value: 'blue' },
    { label: 'The color red', value: 'red' },
    { label: 'The color green', value: 'green' },
]

const App = () => {
    const [selected, setSelected] = useState(options[0])
    return (
        <div>
            <Header />

            <Route path="/">
                <Accordion items={items} />
            </Route>
            <Route path="/search">
                <Search />
            </Route>
            <Route path="/dropdown">
                <Dropdown 
                    label="Select a Color"
                    options={options}
                    selected={selected}
                    onSelectedChange={setSelected}
                />
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
        </div>
    )
}

export default App;
