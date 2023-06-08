import React from 'react';
import {curveCatmullRom} from 'd3-shape';
import {XAxis, YAxis, HorizontalGridLines, VerticalGridLines, FlexibleWidthXYPlot, LineMarkSeries } from 'react-vis';
import 'react-vis/dist/style.css';


const Prices = ({ part }) => {
    return (
    <FlexibleWidthXYPlot xType="time" height={600}>
      <HorizontalGridLines style={{stroke: '#B7E9ED'}} />
      <VerticalGridLines style={{stroke: '#B7E9ED'}} />
      <XAxis title="Date"/>
      <YAxis title="Price USD" />

      <LineMarkSeries
        className="linemark-series-example-2"
        curve={'curveStepAfter'}
        style={{
          strokeWidth: '3px'
        }}
        lineStyle={{stroke: 'purple'}}
        markStyle={{stroke: 'purple'}}
        data={[{x: new Date('01/01/2018'), y: 5}, {x: new Date('02/01/2018'), y: 30}, {x: new Date('03/10/2018'), y: 18}, {x: new Date('03/20/2019'), y: 9}]}
      />

    </FlexibleWidthXYPlot>
  );
}

export default Prices