let productExport;
const userAction = async () => {
    const response = await fetch(
      "https://api.npoint.io/ccbf7a879806d5a17e8b"
    );
    const myJson = await response.json(); //extract JSON from the http response
    const productProps = Object.values(myJson.products);
      productExport = productProps;
    const productsInfo = productProps.map(
      (prod) =>
        `<tr><td>${prod.name}</td><td>${prod.price}</td><td>${prod.desc}</td><td><img src="${prod.imgSrc}"></td></tr>`
    );
    const tableText = `
    <div id="inner-container">
<h1> ${myJson.siteTitle}</h1>
<table>
<tr>
  <th>Name</th>
  <th>Price</th>
  <th>Description</th>
  <th>Label</th>
</tr>
${productsInfo}
</table>
</div>
    `;
  };
