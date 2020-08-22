const axios = require('axios');

const getDay = new Date();

const seacrchCtrl = (req, res) => {
  const { cityLat, cityLng, searchTextField } = req.body;
  let appId = process.env.APPID;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchTextField.replace(
    /\s+/g,
    ''
  )}&appid=${appId}&units=metric`;
  axios
    .get(url)
    .then((result) => {
      // console.log(result.data)
      res.render('home', {
        layout: 'home',
        getDay: getDay.toDateString(),
        data: result.data,
      });
    })
    .catch((err) => {
      res.send(err);
      console.log(err);
    });
};

const homeCtrl = (req, res) => {
  let appId = process.env.APPID;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=Lagos,Nigeria&appid=${appId}&units=metric`;
  axios
    .get(url)
    .then((result) => {
      // console.log(result.data)
      res.render('home', {
        layout: 'home',
        getDay: getDay.toDateString(),
        data: result.data,
      });
    })
    .catch((err) => {
      res.send(err);
      console.log(err);
    });
};

module.exports = {
  homeCtrl,
  seacrchCtrl,
};
