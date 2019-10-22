import React from 'react';
import Slider from '@material-ui/core/Slider/Slider';
import Button from '@material-ui/core/Button/Button';
import { connect } from 'react-redux';
import { generate } from '../thunk/genereateActions';
import { setLocationCount } from '../redux/paramReducer';

function GenParams(props) {
    const marks = [
        {
            value: 10,
            label: 10
        },
        {
            value: 100,
            label: 100
        },
        {
            value: 250,
            label: 250
        },
        {
            value: 500,
            label: 500
        },
        {
            value: 750,
            label: 750
        },
        {
            value: 1000,
            label: 1000
        }
    ];

    return (
            <table><tbody>
                <tr>
                    <td colSpan={2} align="center">
                        <h3>Параметры генерации:</h3>
                    </td>
                </tr>
                <tr>
                    <td height="80">Количество точек:   &nbsp;</td>
                    <td>
                        <Slider
                                value={props.locationCount}
                                onChange={props.setLocationCount}
                                min={10}
                                max={1000}
                                name={'Количество точек:'}
                                style={{ width: 300 }}
                                marks={marks}
                                valueLabelDisplay={'on'}
                        />
                    </td>
                </tr>
                <tr>
                    <td colSpan={2}>
                        <Button variant={'contained'} onClick={props.generate}>Генерация</Button>
                    </td>
                </tr>
            </tbody></table>
    );
}

const mapStateToProps = (state) => {
    return state.paramState
};

const mapDispatchToProps = {
    generate,
    setLocationCount
};

export default connect(mapStateToProps, mapDispatchToProps)(GenParams);
