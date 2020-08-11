import React, { useState } from 'react';
import Accordion from './Components/Accordion'
import Search from './Components/Search';
import Dropdown from './Components/Dropdown';
import Translate from './Components/Translate';
import Route from './Components/Route';
import Header from './Components/Header';

const App = () => {


}
    // return (
    //     // <div><Accordion items = {items} /></div>
    //     // <div><Search /></div>
    //     <div><Dropdown options = {options} /></div>
    // );

    // Component Routing using pathname values in window.location
    // const showAccordion = () => {
    //     if (window.location.pathname === '/') {
    //         return <div><Accordion items = {items} /></div>;
    //     }
    // }

    // const showList = () => {
    //     if(window.location.pathname === '/list') {
    //         return <div><Search /></div>;
    //     }
    // }

    // const showDropdown = () => {
    //     if(window.location.pathname === '/dropdown') {
    //         return <div><Dropdown options = {options} /></div>;
    //     }
    // }

    // const showTranslate = () => {
    //     if(window.location.pathname === '/translate') {
    //         return <div><Translate /></div>;
    //     }
    // }


const options = [
    {
        label : 'The color Red',
        value : 'red'
    },
    {
        label : 'The color Green',
        value : 'green'
    },
    {
        label : 'A shade of blue',
        value : 'blue'
    }
];

const items = [
    {
        title : 'What is React?' ,
        content : 'React is a front-end Javascript framework.'
    },
    {
        title : 'Why use React?' ,
        content : 'React is popular JS library among front-end engineers.'
    },
    {
        title : 'How to use React?' ,
        content : 'You can use React by creating components.'        
    }
];

// export default () => {

//     const [selected, setSelected] = useState (options[0]);
//     const [dropdownOpen,setDropdownOpen] = useState(true);

//     return (
//         <div>
//             <button onClick = {() => setDropdownOpen(!dropdownOpen)}>Toggle Dropdown</button>
//             { dropdownOpen ?
//                 <Dropdown selected = {selected} onSelectedChange = {setSelected} options = {options} />
//                 : null
//             }
//         </div>
//     );
// }

 export default () => {
    const [selected, setSelected] = useState (options[0]);

     return (
         <div>
             <Header />
             
             <Route path = '/'>
                <Accordion items = {items} />
             </Route>

             <Route path = '/list'>
                <Search />
             </Route>

             <Route path = '/dropdown'>
                <Dropdown label = 'Select a color' selected = {selected} onSelectedChange = {setSelected} options = {options} />
             </Route>

             <Route path = '/translate'>
                <Translate />
             </Route>

         </div>
     );
 }



