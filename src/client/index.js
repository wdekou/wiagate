import React from 'react';
import { render as reactRender } from 'react-dom';
import { AppContainer as HotAppContainer } from 'react-hot-loader';

import log from '../common/log';
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
    log.info(info);
    log.error(error);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

const root = document.getElementById('root');

if(__DEV__) {
  const render = Component => {
    reactRender(
      <HotAppContainer>
          <Component />
      </HotAppContainer>,
      document.getElementById('root'),
    )
  }

  render(App)

  // Webpack Hot Module Replacement API
  if (module.hot) {
    module.hot.accept('./App', () => { 
      const NewApp = App;
      render(NewApp);
    });
  }

} else {
  const AppContainer = ErrorBoundary
  reactRender(
    <AppContainer>
      <App />
    </AppContainer>, root);
}
// registerServiceWorker();
