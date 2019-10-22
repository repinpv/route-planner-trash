import React from 'react';
import '../App.css';
import connect from 'react-redux/es/connect/connect';
import GenParams from './GenParams';
import { Stage } from '../const/Stage';
import Button from '@material-ui/core/Button';
import { reset } from '../thunk/appActions';
import { stageSelector } from '../reselect/appSelectors';
import GeneratedMap from './GeneratedMap';

function App(props) {

    let screen = <span>error</span>;
    switch (props.stage) {
        case Stage.CHOOSE_GENERATION_PARAMS:
            screen = <GenParams/>;
            break;
        case Stage.SHOW_LOCATION_MAP:
            screen = <GeneratedMap/>;
            break;
    }

    return (
            <div>
                <div>
                    <Button variant={'contained'} onClick={props.reset}>Заново</Button>
                </div>
                <div>
                    {screen}
                </div>
            </div>
    );
}

const mapStateToProps = (state) => {
    return {
        stage: stageSelector(state)
    }
};

const mapDispatchToProps = { reset };

export default connect(mapStateToProps, mapDispatchToProps)(App);
