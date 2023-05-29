import React from 'react'
import LinkArt from '../../components/linkArt'
import collectionJson from '../../data/personnal.json'
import artJson from '../../data/art.json'
import '../../style/collection.css'

function Collection() {
  document.querySelector('main')?.classList.remove('art');
  return (
    <>
      <ul className="collection">
        {collectionJson.personal.map((data, key) => {
            const singleArt = artJson.art.find(el=> el.id == data.artId)
            const img = require("../../assets/art/" + singleArt.img)
            const route = "/art/" + singleArt.id

          return (
              <LinkArt key={key} route={route} img={img} name={singleArt.name}/>
          );
        })}
      </ul>
    </>
  );
}

export default Collection;