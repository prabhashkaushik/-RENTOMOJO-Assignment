import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import MuiTheme from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
    <MuiTheme>
        <div class="title">
            <AppBar title="Game Engine" showMenuIconButton={false} />
            <App />
        </div>
    </MuiTheme>
), document.getElementById('root'));
registerServiceWorker();
