import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import classNames from 'classnames';
import Helmet from 'react-helmet';
import {
  Layout, Header, Content, Footer, FooterSection,
  FooterLinkList
} from 'react-mdl';
import {getColorClass, getTextColorClass} from 'react-mdl/lib/utils/palette';

import pkginfo from '../../package.json';

import * as ArticleActions from '../actions/article';
import ArticleList from '../components/articles/ArticleList';
import Footers from '../components/footer/Footer';
import Headers from '../components/header/Header';

class Articles extends React.Component {
  constructor(props) {
    super(props);

    this.handleChangeClientState = this.handleChangeClientState.bind(this);
  }

  componentWillMount() {
    this.props.fetchArticles();
  }

  componentDidMount() {
  }

  componentWillReceiveProps() {
  }

  handleChangeClientState(newState) {
    console.log(newState);
  }

  render() {
    const {articles} = this.props;
    return (
      <div className={classNames('mdl-demo', 'mdl-base')}>
        <Helmet
          htmlAttributes={{lang: 'en', amp: undefined}} // amp takes no value
          title="Containers"
          titleTemplate="App - %s"
          defaultTitle="My Default Title"
          meta={[
            {name: 'description', content: pkginfo.description},
            {name: 'version', content: pkginfo.version},
            {name: 'hompage', content: pkginfo.hompage},
            {name: 'product', content: pkginfo.name},
            {name: 'keywords', content: pkginfo.keywords},
            {name: 'author', content: pkginfo.author},
            {name: 'license', content: pkginfo.license}
          ]}
          onChangeClientState={this.handleChangeClientState} />
        <Layout fixedHeader className={classNames(getColorClass('grey', 100), getTextColorClass('grey', 700))}>

          <Headers/>
          <Content component="main">
            <ArticleList articles={articles} />
          </Content>
          <Footers/>
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  articles: state.articleReducer.articles
});

const mapDispatchToProps = dispatch => bindActionCreators(ArticleActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
