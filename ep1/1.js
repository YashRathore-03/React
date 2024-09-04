const parent = React.createElement(
    "div", 
    {id:"parent"},
    [
        [
            React.createElement("h1", {}, "i m parent"), 
            React.createElement("h2", {}, "i m parent")
        ],
        [
            React.createElement("h1", {}, "i m parent"), 
            React.createElement("h2", {}, "i m parent")
        ]
    ]
);
const heading=React.createElement("h1", {}, "Hello world");

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
