class Api {
  constructor(t) {
    this.path = "https://test.v5.pryaniky.com"
    this.token = t;
  }

  getLogIn(body) {
    return fetch(`${this.path}/ru/data/v3/testmethods/docs/login`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'x-auth': `${this.token}`
      },
      body: JSON.stringify(body)
    })
    .then(res => res.json())
    .then(data => data);
  }

  getTable() {
    return fetch(`${this.path}/ru/data/v3/testmethods/docs/userdocs/get`);
  }

  addNote(body) {
    return fetch(`${this.path}/ru/data/v3/testmethods/docs/userdocs/create`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          'x-auth': `${this.token}`
      },
        body: JSON.stringify(body)
      });
    }
    
    delNote(id) {
      return fetch(`${this.path}/ru/data/v3/testmethods/docs/userdocs/delete/{id}`, {
        method: "DELETE",
        'x-auth': `${this.token}`
      });
    }

    updNote(id, body) {
      return fetch(`${this.path}/ru/data/v3/testmethods/docs/userdocs/set/{id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          'x-auth': `${this.token}`
        },
        body: JSON.stringify(body)
        });
    }
}  


export default Api;