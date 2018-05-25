/* var HelloReact = createReactClass({
 *   propTypes: {
 *     greeting: PropTypes.string
 *   },
 *
 *   render: function() {
 *     return (
 *       <React.Fragment>
 *         Greeting: {this.props.greeting}
 *       </React.Fragment>
 *     );
 *   }
 * });
 *  */

class HelloReact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return <React.Fragment>Hello, {this.props.greeting}</React.Fragment>
  }
}

HelloReact.propTypes = {
  greeting: PropTypes.string.isRequired
}
HelloReact.defaultProps = {
  greeting: "you didn't provide a greeting, you shmuck"
}
