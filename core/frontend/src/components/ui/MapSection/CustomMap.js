import React, { useEffect } from "react";
import L from "leaflet";
import RasterCoords from "leaflet-rastercoords";

const CustomMap = () => {
  const tiles = "./tiles/{z}/{x}/{y}.png";
  var minZoom = 1;
  var maxZoom = 4;
  var img = [
    3831, // original width of image `karta.jpg`
    3101, // original height of image
  ];

  useEffect(() => {
    var mymap = L.map("mapid", {
      minZoom: minZoom,
      maxZoom: maxZoom,
    });

    var rc = new L.RasterCoords(mymap, img);
    mymap.setView(rc.unproject([1589, 1447]), 3);

    L.tileLayer(tiles, {
      noWrap: true,
      attribution:
        'Map <a href="https://commons.wikimedia.org/wiki/' +
        'File:Karta_%C3%B6ver_Europa,_1672_-_Skoklosters_slott_-_95177.tif">' +
        "Karta över Europa, 1672 - Skoklosters</a> under " +
        '<a href="https://creativecommons.org/publicdomain/zero/1.0/deed.en">CC0</a>',
    }).addTo(mymap);
  });

  return (
    <>
      <div id="mapid" style={{ height: 500 }}></div>
    </>
  );
};

export default CustomMap;
