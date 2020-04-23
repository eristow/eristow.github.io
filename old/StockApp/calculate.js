function calculate() {
  const stocks = document.getElementsByTagName('input');
  const stops = document.getElementsByTagName('p');
  console.log(stocks);
  console.log(stops);

  for (let i = 0; i < stocks.length; i++) {
    const price = stocks[i].value * 0.85;
    stops[i].innerHTML = price;
  }
}
