// import { model, utils } from '~/index';
import * as React from 'react';

interface IProps {
  title: String;
}

export class ListElement extends React.Component<IProps> {
  public constructor(props: IProps) {
    super(props);
  }

  public render() {
    return (
      <li><h3>{ this.props.title }</h3></li>
    );
  }
}
