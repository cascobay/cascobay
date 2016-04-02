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
          <DataRow dataThreshold={70} dataField='Health Index Score' dataValue={this.props.currentFeature.index}></DataRow>
          <DataRow dataField='pH Parameter Score' dataValue={this.props.currentFeature.ph} />
          <DataRow dataField='Dissolved Oxygen Parameter Score' dataValue={this.props.currentFeature._do  + ' ppm'} />
          <DataRow dataField='Water Clarity Parameter Score' dataValue={this.props.currentFeature.waterclarity} />

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
