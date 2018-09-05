import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'


class Layout extends Component {

    state = {
      showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        console.log('Toggle clicked')
        this.setState({showSideDrawer: !this.state.showSideDrawer})
    }

    render(){
      
      return(
      
      <Aux>
        <Toolbar toggleSideDrawer={this.sideDrawerClosedHandler}/>
        <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
        <main className={classes.Content}>
            {this.props.children}
        </main>
      </Aux>
      )
    }
}

export default Layout