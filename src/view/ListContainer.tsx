import * as React from 'react';
import { model, view } from '~/index';
import '~/styles/style.scss';

// const containerStyle = utils.style({
//     position: 'absolute',
//     left: 0,
//     right: 0,
//     top: 40,
//     bottom: 0,
//     background: '#ddd',
// });

interface IProps {
  listelements: Array<model.ListData>;
}

export class ListContainer extends React.Component<IProps> {
  public constructor(props: IProps) {
    super(props);
  }

  public render() {
    return (
      <div className='app-container' >
        <ul> { this.props.listelements.map((value, key) =>
                <view.ListElement key= { key } title={ value.title } />,
           ) } 
        </ul>
      </div>
    );
  }

}
