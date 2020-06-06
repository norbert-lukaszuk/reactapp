const handleClickJoke = () => {
  fetch("http://api.icndb.com/jokes/random")
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
      return data;
    });
};
export default handleClickJoke;
