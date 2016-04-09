import React, { PropTypes } from 'react'

import ViewTab from 'containers/ViewTab'
import DataRow from './DataRow'

const DataWindow = React.createClass({
  render () {
    let content;
    if (this.props.view === 'INTERPRETATION_VIEW') {
      content = <div className='interpretation-view'>{this.props.currentFeature.indexinterpretation}</div>;
    } else if (this.props.view==='DATA_VIEW'){
      content = (
        <div>
          <DataRow className='health-index' dataThreshold={70} dataField='Health Index Score' dataValue={Math.round(this.props.currentFeature.index)}></DataRow>
          <DataRow dataField='pH Parameter Score' dataValue={Math.round(this.props.currentFeature.ph * 100)} />
          <DataRow dataField='Dissolved Oxygen Parameter Score' dataValue={Math.round(this.props.currentFeature._do  * 100)} />
          <DataRow dataField='Water Clarity Parameter Score' dataValue={Math.round(this.props.currentFeature.waterclarity * 100)} />

        </div>
    )
    }

    return (
      <div>
        <nav className='navbar'>
          <ViewTab  view='INTERPRETATION_VIEW'>Description</ViewTab>
          <ViewTab view='DATA_VIEW'>Score</ViewTab>
        </nav>
        {content}
      </div>
    )
  }
})

export default DataWindow
