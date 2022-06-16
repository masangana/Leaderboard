export default class LeaderBoard {
  constructor(url) {
    this.url = url;
  }

    getCollection = async () => {
      await fetch(this.url)
        .then((Response) => Response.json())
        .then((data) => {
          localStorage.setItem('dataGame', JSON.stringify(data));
        });
    }

    mydata = async () => {
      const response = await fetch(this.url);
      const jsonResult = await response.json();
      return jsonResult.result;
    }

    addToCollection = async (user, score) => {
      await fetch(this.url, {
        method: 'POST',
        body: JSON.stringify({
          user,
          score,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }).then((response) => response.json());
    }

    newGame = async () => {
        await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
          method: 'POST',
          body: JSON.stringify({
            name : 'Halo War',
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        }).then((response) => response.json())
        .then((data) => {
            localStorage.setItem('idGame', JSON.stringify(data));
          });
    }
}