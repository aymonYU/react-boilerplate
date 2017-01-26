import React from 'react';
import {Link} from 'react-router';
import {Layout, Header, Content, Footer, FooterSection,
  FooterLinkList } from 'react-mdl';

import {getColorClass, getTextColorClass} from 'react-mdl/lib/utils/palette';
import classNames from 'classnames';

import './Header.css'

export default class Headers extends React.Component {
  render() {
    return (
      <div>
        <Header className={classNames('demo-header', getColorClass('grey', 100), getTextColorClass('grey', 800))} title="Users" scroll />
      </div>
    );
  }
}
