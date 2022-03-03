import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/app/app';



// const text = 'Hello za warudo!'
//привыкать замыкать в скобки верстку если строк > 1
//нужен единственный родитель - корень для верстки
//интерполяция невозможна с объектами (например Date)
//аттрибуты в кемеле, классНэйм вместо класс
// const elem = (
//   <div>
//     <h2 className='text'>Текст: {text}</h2> 
//     <input type='text' />
//     <button tabIndex='0'>Click</button>
//   </div>
// );

//in upper case = React component
//in lower case = React element
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);


