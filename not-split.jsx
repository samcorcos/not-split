if (Meteor.isClient) {
  const {
    Route,
    Router,
    IndexRoute,
    Link
  } = ReactRouter;

  const AppBody = React.createClass({
    render() {
      return <div>{this.props.children}</div>
    }
  })
  const Home = React.createClass({
    render() {
      return (
        <div>
          <Link to="/">Home</Link><br/>
          <Link to="other">Other</Link><br/>
          <Link to="settings">Settings</Link>
          <h1>This is the Home component.</h1>
        </div>
      )
    }
  })
  const Other = React.createClass({
    render() {
      return (
        <div>
          <Link to="/">Home</Link><br/>
          <Link to="other">Other</Link><br/>
          <Link to="settings">Settings</Link>
          <h1>This is the Other component.</h1>
        </div>
      )
    }
  })
  const Settings = React.createClass({
    render() {
      return (
        <div>
          <Link to="/">Home</Link><br/>
          <Link to="other">Other</Link><br/>
          <Link to="settings">Settings</Link>
          <h1>This is the Settings component.</h1>
        </div>
      )
    }
  })

  const routes = (
    <Router history={ReactRouter.HistoryLocation}>
      <Route component={AppBody} path="/">
        <IndexRoute component={Home}></IndexRoute>
        <Route path="other" component={Other} />
        <Route path="settings" component={Settings} />
      </Route>
    </Router>
  )

  Meteor.startup(function () {
    ReactDOM.render(
      routes,
      document.body
    )
  });
}
