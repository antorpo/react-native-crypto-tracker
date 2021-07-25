class Http {
  // Singleton
  static instance = new Http();

  get = async (url) => {
    try {
      let request = await fetch(url);
      let json = await request.json();
      return json;
    } catch (err) {
      console.error('HTTP GET: ', err);
      throw Error(err);
    }
  };

  post = async (url, body) => {
    try {
      let request = await fetch(url, {
        method: 'POST',
        body,
      });

      let json = await request.json();
      return json;
    } catch (err) {
      console.error('HTTP POST: ', err);
      throw Error(err);
    }
  };
}

export default Http;
