require(["esri/Map", "esri/views/MapView", "esri/WebMap"], (
  Map,
  MapView,
  WebMap
) => {
  const map = new Map({
    basemap: "topo-vector",
  });

  let portalID;

  const view = new MapView({
    container: "viewDiv",
    map: map,
    zoom: 4,
    center: [15, 65], // longitude, latitude
  });

  let addWidget = document.getElementById("addWidget");

  function addWebMap() {
    portalID = document.getElementById("webmapID").value;

    let webmap = new WebMap({
      portalItem: {
        // autocasts as new PortalItem()
        id: portalID,
      },
    });

    view.map = webmap;

    console.log(webmap.portalItem.id);
  }

  view.ui.add(addWidget, "top-right");

  view.when().then(() => {
    document.getElementById("addButton").addEventListener("click", addWebMap);
  });

  //   const webmap = new WebMap({
  //     portalItem: {
  //       // autocasts as new PortalItem()
  //       id: "e691172598f04ea8881cd2a4adaa45ba",
  //     },
  //   });

  //   const webmap = new WebMap({
  //     portalItem: {
  //       // autocasts as new PortalItem()
  //       id: "f701172599f04ea8781de2a4adzz46ab",
  //     },
  //   });
});
