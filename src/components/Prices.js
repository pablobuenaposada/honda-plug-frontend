import React from 'react';
import {curveCatmullRom} from 'd3-shape';
import {XAxis, YAxis, HorizontalGridLines, VerticalGridLines, FlexibleWidthXYPlot, LineMarkSeries } from 'react-vis';
import 'react-vis/dist/style.css';

const colorPalette = [
  '#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd',
  '#8c564b', '#e377c2', '#7f7f7f', '#bcbd22', '#17becf',
  '#aec7e8', '#ffbb78', '#98df8a', '#ff9896', '#c5b0d5',
  '#c49c94', '#f7b6d2', '#c7c7c7', '#dbdb8d', '#9edae5'
];

const Prices = ({ stocks }) => {

    return (
    <FlexibleWidthXYPlot xType="time" height={600}>
      <HorizontalGridLines style={{ stroke: '#B7E9ED' }} />
      <VerticalGridLines style={{ stroke: '#B7E9ED' }} />
      <XAxis title="Date" />
      <YAxis title="Price EUR" />

      {stocks.map((stock, index) => (
        <LineMarkSeries
          key={index}
          className={`linemark-series-example-${index}`}
          curve={'curveStepAfter'}
          style={{
            strokeWidth: '3px'
          }}
          lineStyle={{ stroke: colorPalette[index % colorPalette.length] }}
          markStyle={{ stroke: colorPalette[index % colorPalette.length] }}
          data={stock.history.map((dataPoint) => ({
            x: new Date(dataPoint.modified),
            y: parseFloat(dataPoint.price)
          }))}
        />
      ))}
    </FlexibleWidthXYPlot>
  );
}

export default Prices