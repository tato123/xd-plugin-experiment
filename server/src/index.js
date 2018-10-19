import React from "react";
import ReactDom from "react-dom";
import XDContainer from "./components/XD";

function importAll(r) {
  return r.keys().reduce(
    (acc, key) => ({
      ...acc,
      [key.substring(2, key.lastIndexOf("."))]: r(key)
    }),{}
  );
}

const images = importAll(
  require.context("./imgs/", false, /\.(png|jpe?g|svg)$/)
);

const props = importAll(require.context("./imgs/", false, /\.(json)$/));

const merged = Object.keys(images).map(key => ({id: key, src:images[key], props:props[key]  })  )

ReactDom.render(
  <div>
    {merged.map((file, idx) => (
      <XDContainer key={file.id} srcFile={file.src} id={file.id} {...file.props}/>
    ))}
  </div>,
  document.querySelector("#root")
);
