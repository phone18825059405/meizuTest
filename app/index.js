
import './b.scss';
import generateText from './sub';

var app  = document.createElement('div');
app.innerHTML = '<h1>Hello World and some fuck</h1>';
app.appendChild(generateText());
document.body.appendChild(app);


