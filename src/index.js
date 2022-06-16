import 'bootstrap';
import './style.scss';
import LeaderBoard from './modules/board.js';
import Listvue from './modules/vue.js';

const reload = document.getElementById('reload');
const submit = document.getElementById('submit');
const user = document.getElementById('user');
const score = document.getElementById('score');

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/au9ydNy6JgFBAIbZfr3Q/scores/';

const collection = new LeaderBoard(url);

const newliste = new Listvue();
const arr = JSON.parse(localStorage.getItem('dataGame'));

collection.getCollection();
newliste.showlist(arr);

// reload button
reload.addEventListener('click', () => {
  collection.getCollection();
  if (localStorage.getItem('dataGame')) {
    const arr = JSON.parse(localStorage.getItem('dataGame'));
    newliste.showlist(arr);
  }
});

// submit button
submit.addEventListener('click', () => {
  if (!user.value || !score.value) {
    user.setCustomValidity('Please check the user name or the score');
  } else if (user.value && score.value) {
    collection.addToCollection(user.value.trim(), score.value.trim());
    user.value = '';
    score.value = '';
  }
});

// when the page loadding
window.onload = () => {
  if (localStorage.getItem('dataGame')) {
    const arr = JSON.parse(localStorage.getItem('dataGame'));
    newliste.showlist(arr);
  }
};