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
      <li><h2>{ this.props.title }</h2></li>
    );
  }
}
