import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  FlexibleWidthXYPlot,
  LineMarkSeries,
  DiscreteColorLegend,
  Hint
} from 'react-vis'
import 'react-vis/dist/style.css'

const colorPalette = [
  '#1f77b4',
  '#ff7f0e',
  '#2ca02c',
  '#d62728',
  '#9467bd',
  '#8c564b',
  '#e377c2',
  '#7f7f7f',
  '#bcbd22',
  '#17becf',
  '#aec7e8',
  '#ffbb78',
  '#98df8a',
  '#ff9896',
  '#c5b0d5',
  '#c49c94',
  '#f7b6d2',
  '#c7c7c7',
  '#dbdb8d',
  '#9edae5'
]

const Prices = ({ stocks }) => {
  const formatDateString = (date) => {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' }
    return date.toLocaleDateString(undefined, options)
  }

  const [hoveredValue, setHoveredValue] = useState(null)

  const legendItems = stocks.map((stock, index) => ({
    title: stock.source,
    color: colorPalette[index % colorPalette.length]
  }))

  const onMouseOver = (value) => {
    setHoveredValue(value)
  }

  const onMouseOut = () => {
    setHoveredValue(null)
  }

  return (
    <FlexibleWidthXYPlot xType="time" height={600}>
      <HorizontalGridLines style={{ stroke: '#B7E9ED' }} />
      <VerticalGridLines style={{ stroke: '#B7E9ED' }} />
      <XAxis title="Date" />
      <YAxis title="Price" />

      {stocks.map((stock, index) => (
        <LineMarkSeries
          key={index}
          className={`linemark-series-example-${index}`}
          curve={'curveStepBefore'}
          style={{
            strokeWidth: '3px'
          }}
          lineStyle={{ stroke: colorPalette[index % colorPalette.length] }}
          markStyle={{ stroke: colorPalette[index % colorPalette.length] }}
          data={stock.history.map((dataPoint) => ({
            source: stock.source,
            x: new Date(dataPoint.modified),
            y: parseFloat(dataPoint.price),
            currency: stock.price_currency
          }))}
          onValueMouseOver={onMouseOver}
          onValueMouseOut={onMouseOut}
        />
      ))}

      {hoveredValue && (
        <Hint value={hoveredValue}>
          <div className="hint-content">
            <span>{hoveredValue.source}</span>
            <span> {hoveredValue.y} {hoveredValue.currency}</span>
            <span> ({formatDateString(hoveredValue.x)})</span>
          </div>
        </Hint>
      )}
      <DiscreteColorLegend items={legendItems} orientation="horizontal" />
    </FlexibleWidthXYPlot>
  )
}

Prices.propTypes = {
  stocks: PropTypes.arrayOf(
    PropTypes.shape({
      source: PropTypes.string.isRequired,
      history: PropTypes.arrayOf(
        PropTypes.shape({
          modified: PropTypes.string.isRequired,
          price: PropTypes.number.isRequired
        })
      ).isRequired,
      price_currency: PropTypes.string.isRequired
    })
  )
}

export default Prices
