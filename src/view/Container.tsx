import * as React from 'react';
import { model, utils, view } from '~/index';
import '~/styles/style.scss';

// or you could pull this from style.css
const containerStyle = utils.style({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 30,
    bottom: 0,
    background: '#eee',
});

interface IProps {
  listelements: Array<model.ListData>;
}

export class Container extends React.Component<IProps> {
  public constructor(props: IProps) {
    super(props);
  }

  public render() {
    return (
      <div className={ containerStyle } >
        <ol> { this.props.listelements.map((value, key) =>
                <view.ListElement key= { key } title={ value.title } />,
           ) } 
        </ol>
      </div>
    );
  }

}
