import * as React from 'react';
import '~/styles/style.scss';

export class Header extends React.Component {
  public constructor() {
    super();
  }

  public render() {
    return (
      <div className='header'>
        Basic List App in React
        <div className='plus-symbol' />
      </div>
    );
  }
}
