import './index.css';
import * as serviceWorker from './serviceWorker';
import state from "./redux/state";
import {renderEntierTree} from "./render";


renderEntierTree(state);

serviceWorker.unregister();