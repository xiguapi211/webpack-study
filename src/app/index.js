require('../css/reset.css');
import { render } from 'react-dom';
import routes from './router';

render(routes, document.getElementById('react-content'));