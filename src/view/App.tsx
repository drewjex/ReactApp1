// Libraries
import * as React from 'react';
import { app } from '~/index';
import { view } from '~/index';

export class App extends React.Component {

  public loadInterval: number;

  public constructor() {
    super();
    if (this.refs.main) {
      this.setState(app);
    }
  }

  public incrementCounter() {
    app.counter += app.multiplier;
    this.setState(app);
  }

  public componentDidMount() {
    this.loadInterval = setInterval(this.incrementCounter.bind(this), 500);
  }

  public componentWillUnmount() {
    clearInterval(this.loadInterval);
  }

  public render() {
    return (
      <div ref='main'>
        <view.Header />
        <view.ListContainer listelements = { app.list } />
      </div>
    );
  }
}
