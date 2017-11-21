import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, CardColumns } from 'reactstrap';

import WispMini from './WispMini';
import { setCurrentWisp } from './actions';

class WispList extends Component {
  onClick = (id) => () => {
    const wispF = this.props.wisps.filter(wisp => wisp.id == id);
    const { setCurrentWisp, history: { push } } = this.props;
    const wisp = wispF[0]
    console.log(wisp)
    setCurrentWisp(wisp);
    console.log(this.props)
    
    push('/app/wisps/' + id )
  }
  render() {
    console.log(this.props)
    
    const { wisps } = this.props;
    return(
      <CardColumns>
        {wisps.map((wisp ) => (<WispMini {...wisp} onClick={this.onClick} key={wisp.id} />)) }
      </CardColumns>
    )
  }
}

export default connect(state => ({ wisps: state.wisps.wisps}), {
  setCurrentWisp
})(WispList);
