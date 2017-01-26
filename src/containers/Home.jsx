import React from 'react';
import classNames from 'classnames';
import Helmet from 'react-helmet';
import {
  Layout, Header, Content, Footer, FooterSection,
  FooterLinkList, Grid, Cell
} from 'react-mdl';

import {getColorClass, getTextColorClass} from 'react-mdl/lib/utils/palette';


import Footers from '../components/footer/Footer';
import Headers from '../components/header/Header';

export default class Home extends React.Component {
  render() {
    return (
      <div className={classNames('mdl-demo', 'mdl-base')}>
        <Helmet title="Dashboard" />
        <Layout fixedHeader className={classNames(getColorClass('grey', 100), getTextColorClass('grey', 700))}>

          <Headers/>
          <Content component="main">
            <Grid component="section" className="section--center" shadow={0} noSpacing>
              <Cell col={12} tablet={12} phone={12}>
                Dashboard Contents
              </Cell>
            </Grid>
          </Content>
          <Footers />
        </Layout>
      </div>
    );
  }
}
