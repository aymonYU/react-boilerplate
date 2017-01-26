import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import classNames from 'classnames';
import Helmet from 'react-helmet';
import {Layout, Header, Content, Footer, FooterSection,
  FooterLinkList } from 'react-mdl';
import {getColorClass, getTextColorClass} from 'react-mdl/lib/utils/palette';

import * as UserActions from '../actions/user';
import UserList from '../components/users/UserList';
import Footers from '../components/footer/Footer';
import Headers from '../components/header/Header';



class Users extends React.Component {
  constructor(props) {
    super(props);

    this.handleChangeClientState = this.handleChangeClientState.bind(this);
  }

  componentWillMount() {
    this.props.fetchUsers();
  }

  componentDidMount() {
  }

  componentWillReceiveProps() {
  }

  handleChangeClientState(newState) {
    console.log(newState);
  }

  render() {
    const {users} = this.props;
    return (
      <div className={classNames('mdl-demo', 'mdl-base')}>
        <Helmet title="Containers" />
        <Layout fixedHeader className={classNames(getColorClass('grey', 100), getTextColorClass('grey', 700))}>
          <Headers />
          <Content component="main">
            <UserList users={users} />
          </Content>
          <Footers />
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.userReducer.users
});

const mapDispatchToProps = dispatch => bindActionCreators(UserActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Users);
