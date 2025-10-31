import React from 'react';
import { createRoot } from 'react-dom/client';

const htmlelement = document.getElementById('root');
const rootreact = createRoot(htmlelement);

const headerElement = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    { className: "title" },
    "This is H1"
  ),
  React.createElement(
    "h2",
    { className: "title" },
    "This is H2",
  ),
  React.createElement(
    "h3",
    { className: "title" },
    "This is H3"
  )
);

const headerElementjsx = (
  <div>
    <h1 className="title">This is H1</h1>
    <h2 className="title">This is H2</h2>
    <h3 className="title">This is H3</h3>
  </div>
);

const Header = () => {
  return (
    <div>
      <h1>This is H1</h1>
      <h2>This is H2</h2>
      <h3>This is H3</h3>
    </div>
  );
}
// throws an ReferenceError
const Body = () => {
  return (
    <div>
      <h1>This is H1</h1>
      <h2>This is H2</h2>
      <h3>This is H3</h3>
      {TitleComponent()}
      <Header />
    </div>
  );
  // const Headertag = () => {
  //   return <h1>This is composition Component</h1>
  // }
}

//Error recitification
const TitleComponent = () => {
  return <h1>This is composition Component</h1>
}

// rootreact.render(headerElement);
// rootreact.render(headerElementjsx);
rootreact.render(<Body />);
