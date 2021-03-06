import * as React from 'react';

import Graph from './graph/graph';
import GraphTypeSelector from './graphTypeSelector';
import MetricResultActions from './metricResultActions';
import MetricResultStats from './metricResultStats';

/*
 * Responsible for layout of the metric result detail view after the metric set
 * pair for the result has loaded successfully.
 * */
export default () => (
  <section className="vertical flex-1 sp-padding-xl-bottom" style={{ overflowY: 'auto' }}>
    <GraphTypeSelector />
    <Graph />
    <MetricResultActions />
    <MetricResultStats />
  </section>
);
