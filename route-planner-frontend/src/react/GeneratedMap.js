import React from 'react';
import { Graph } from 'react-d3-graph';
import { connect } from 'react-redux';
import Slider from '@material-ui/core/Slider';
import { setLocationFilter, setPathFilter } from '../redux/graphParamReducer';
import { linksSelector, nodesSelector } from '../reselect/graphSelector';
import { locationMarksSelector, pathMarksSelector } from '../reselect/marksSelectors';

function GeneratedMap(props) {
    const graphConfig = {
        width: '100%',
        height: 1000,
        staticGraph: true,
        nodeHighlightBehavior: true,
        node: {
            color: 'lightblue',
            size: 120,
            highlightStrokeColor: 'blue',
            showToolTip: true,
            labelProp: 'title',
        },
        link: {
            color: 'lightgrey',
            labelProp: 'title',
        }
    };

    const graphParams = props.graphParams;

    let graph;
    if (props.graph.nodes.length > 9) {
        graph = <Graph
                id="graph-id"
                data={props.graph}
                config={graphConfig}
        />;
    } else {
        graph = <span>no nodes</span>
    }

    return (
            <div>
                <table><tbody>
                    <tr>
                        <td height="80">Соотношение суммы ко времени обслуживания:  &nbsp;</td>
                        <td>
                            <Slider
                                    id="locationSlider"
                                    value={graphParams.locationFilter}
                                    onChangeCommitted={props.setLocationFilter}
                                    min={graphParams.locationMinValue}
                                    max={graphParams.locationMaxValue}
                                    step={0.01}
                                    valueLabelDisplay={'on'}
                                    style={{ width: 300 }}
                                    marks={props.locationMarks}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td height="80">Время пути:</td>
                        <td>
                            <Slider
                                    id="pathSlider"
                                    value={graphParams.pathFilter}
                                    onChangeCommitted={props.setPathFilter}
                                    min={graphParams.pathMinValue}
                                    max={graphParams.pathMaxValue}
                                    step={0.01}
                                    valueLabelDisplay={'on'}
                                    style={{ width: 300 }}
                                    marks={props.pathMarks}
                            />
                        </td>
                    </tr>
                </tbody></table>
                <div style={{ borderStyle: 'solid' }}>
                    {graph}
                </div>
            </div>
    );
}

const mapStateToProps = (state) => {
    const graphParamState = state.graphParamState;

    const graph = {
        nodes: nodesSelector(state),
        links: linksSelector(state)
    };

    return {
        graph: graph,
        graphParams: graphParamState,
        locationMarks: locationMarksSelector(state),
        pathMarks: pathMarksSelector(state),
    }
};

const mapDispatchToProps = {
    setLocationFilter,
    setPathFilter
};

export default connect(mapStateToProps, mapDispatchToProps)(GeneratedMap);
