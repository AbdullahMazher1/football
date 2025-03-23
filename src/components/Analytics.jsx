import React from 'react';
import './Analytics.css';

function Analytics() {
  return (
    <div className='analytics'>
      <div className='analytics-content'>
        <h2 className='analytics-head'>
          By the numbers: <span className="highlight-text">Excellence</span> in health
        </h2>
        <p className='analytics-para-1'>
          Excellence in healthcare is our standard, and our numbers back it up. From patient satisfaction rates to successful treatment outcomes.
        </p>
      </div>

      <div className='analytics-circle'>
        <div className='current-circle current-circle-1'>
          <h2 className='analytics-number'>50%</h2>
          <p className='analytics-para'>
            Of our members start with moderate to severe symptoms
          </p>
        </div>
        <div className='current-circle current-circle-2'>
          <h2 className='analytics-number'>50%</h2>
          <p className='analytics-para'>
            Of our members start with moderate to severe symptoms
          </p>
        </div>
        <div className='current-circle current-circle-3'>
          <h2 className='analytics-number'>50%</h2>
          <p className='analytics-para'>
            Of our members start with moderate to severe symptoms
          </p>
        </div>
        <div className='current-circle current-circle-4'>
          <h2 className='analytics-number'>50%</h2>
          <p className='analytics-para'>
            Of our members start with moderate to severe symptoms
          </p>
        </div>
      </div>
    </div>
  );
}

export default Analytics;