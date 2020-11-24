import React from 'react';
import Main from './pages/Main';
import Header from './components/Header';
import './styles/app.css';



const App = () => {
    return (
        <div className="app">
            <Header />
            <Main />
        </div>
    );
}

export default App;
