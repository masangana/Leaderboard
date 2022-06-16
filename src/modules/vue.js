export default class listvue {
    showlist = (arr) => {
      document.querySelector('.scores').innerHTML = '';
      const li = [];
      if (arr) {
        arr.result = arr.result.sort((a, b) => b.score - a.score);
        arr.result.forEach((element, index) => {
          li[index] = document.createElement('li');
          li[index].textContent = `${element.user}: ${element.score}`;
          document.querySelector('.scores').append(li[index]);
        });
      }
    }
}