// import * as icons from '~/icons'
import * as model from '~/model';
// import * as styles from '~/styles'
import * as utils from '~/utils';
import { createApp } from '~/app';
import * as view from '~/view';
import { init } from './init';

const app = createApp();

export {
   model, view, app, utils
}

init();
