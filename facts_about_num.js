const url = `http://numbersapi.com/42/`;

async function facts_about_num(num) {
  res = await axios.get(`http://numbersapi.com/${num}/`).then((res) => {
    console.log(res.data);
  });
}

facts_about_num(42);
