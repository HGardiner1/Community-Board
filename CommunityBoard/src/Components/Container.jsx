import React from 'react';
import Card from './Card.jsx';


const data = [
  { city: 'Prague', country: 'Czech Republic', imageUrl: 'https://d3dqioy2sca31t.cloudfront.net/Projects/cms/production/000/032/741/original/78c3ca67b8c6f5ff0495e4dc3584b943/article-czech-republic-st-vitus-cathedral.jpg' },
  { city: 'London', country: 'United Kingdom', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/London_Montage_L.jpg/375px-London_Montage_L.jpg' },
  { city: 'Copenhagen', country: 'Denmark', imageUrl: 'https://cdn.audleytravel.com/1050/749/79/15993635-vibrant-nyhavn.webp' },
  { city: 'Munich', country: 'Germany', imageUrl: 'https://www.grayline.com/wp-content/uploads/2022/12/shutterstock_2136741093-scaled.jpg' },
  { city: 'Split', country: 'Croatia', imageUrl: 'https://qtxasset.com/quartz/qcloud1/media/image/luxurytraveladvisor/1583241741/Split%20Croatia%20waterfront%20and%20Marjan%20hill%20view%20-%20Getty-rev.jpg?VersionId=inMMgGmXiiM2SkEqzR8mkMocG8UMcSir' },
  { city: 'Brussels', country: 'Belgium', imageUrl: 'https://worldstrides.com/_next/image?url=https%3A%2F%2Fwst-p-001.sitecorecontenthub.cloud%2Fapi%2Fpublic%2Fcontent%2F4d536dbdcf3740d3ac71cd42163b9c9f%3Fv%3De7c01b14%26t%3D4x3w590&w=1920&q=75&dpl=dpl_DxBd2vKrAbD2KRGY1zEBeR6A7XDh' },
  { city: 'Amsterdam', country: 'Netherlands', imageUrl: 'https://mediaim.expedia.com/destination/9/ae30df8aa5c787e63ba0ae1177151cf1.jpg?impolicy=fcrop&w=450&h=280&q=medium' },
  { city: 'Vienna', country: 'Austria', imageUrl: 'https://concert-vienna.com/cdn/shop/articles/schonbrunn-min_1024x.jpg?v=1502201578' },
  { city: 'Bratislava', country: 'Slovakia', imageUrl: 'https://www.visitbratislava.com/wp-content/uploads/2014/10/letecka-vychod-slnka-hrad-800x533.jpg' },
  { city: 'Budapest', country: 'Hungary', imageUrl: 'https://lp-cms-production.imgix.net/2023-03/GettyRF_473481530.jpg' },
];

const Container = () => {
  // Create rows with 4 cards each (4 columns x 3 rows)
  const rows = [];
  for (let i = 0; i < data.length; i += 4) {
    const rowItems = data.slice(i, i + 4);
    rows.push(
      <tr key={i}>
        {rowItems.map(({ city, country, imageUrl }) => (
          <td key={city} style={{ padding: '10px' }}>
            <Card city={city} country={country} imageUrl={imageUrl} />
          </td>
        ))}
      </tr>
    );
  }

  return (
    <div>
      <table>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}

export default Container;