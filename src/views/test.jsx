<html>
<head>
<script src="https://unpkg.com/react@15/dist/react.min.js"> </script><script src="https://unpkg.com/react-dom@15/dist/react-dom.min.js">
</script>
<script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>
</head>
<body>
    <div id="test"></div>
    <script type="text/babel">
    /*
    ADD REACT CODE HERE
    */
    class Hello extends React.Component {
      render() {
          return <h1>Hello world!</h1>;
      }
    }
    ReactDOM.render(
        <Hello />,
        document.getElementById("test")
    );

    </script>
</body>
</html>
