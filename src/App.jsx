import { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/modules/Button'
import FirstComponent from './components/modules/FirstComponent'
import { Lego, Gole } from './components/modules/LegoAndGole'
import Chapter01 from './components/Chapter/Chapter01/Chapter01'
import WhatIsReact from './components/Chapter/WhatIsReact'
import WhatIsJSX from './components/Chapter/WhatIsJSX'
import Chapter02 from './components/Chapter/Chapter02/Chapter02'
import Chapter022 from './components/Chapter/Chapter02/Chapter2-2'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import NavBar from './components/Nav/Nav'








function App() {
    return (
        <>
            {false && <WhatIsReact />
                && <WhatIsJSX />
                && <Chapter02 />
                && <Chapter022 />}

            <Header />
            <NavBar />
            <Footer />



        </>
    );
};
export default App;
