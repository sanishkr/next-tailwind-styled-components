import React, { Component } from 'react';

import styled from 'styled-components';
import tw from 'twin.macro';

// import getConfig from 'next/config';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  actionCreators as PostsActionsCreators,
  selectors,
} from '../store/posts';
import Header from '../components/Header';
import { withTranslation } from '../i18n';

import '../assets/css/pages/page1.css';
// const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

const Container = styled.div.attrs(({ dir }) => {
  // eslint-disable-next-line no-unused-expressions
  dir;
})`
  ${tw`flex flex-col items-center justify-center min-h-screen text-xl bg-gray-800`};
  margin: 10px;
  &[dir='ltr'] {
    margin-left: 1rem;
    margin-right: 1rem;
  }
  &[dir='rtl'] {
    margin-left: 2rem;
    margin-right: 2rem;
  }
`;

class Page1 extends Component {
  static async getInitialProps({ store, isServer, query, res }) {
    const params = { id: 1 };
    await Promise.all([
      store.dispatch(PostsActionsCreators.getOnePost(params)),
    ]);
    return { ...isServer, namespacesRequired: ['common', 'page1'] };
  }
  componentDidMount = () => {
    this.props.getPosts();
    // this.props.getOnePost({ id: 1 });
  };
  render() {
    const dir = this.props.i18n.language === 'ar' ? 'rtl' : 'ltr';
    const { t } = this.props;
    const name = { name: 'العالمية' };
    // const name = { name: 'world' };
    // console.log(this.props);

    return (
      <>
        <Header></Header>
        <div css={tw`text-center`}>
          <Container dir={dir}>
            {t('hello-world', name)}
            <p css={tw`text-blue-300`}>
              I'm using <code>tailwind</code> and <code>styled-components</code>{' '}
              together in {process.env.NODE_ENV} Env.
            </p>
          </Container>
        </div>
      </>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getPosts: PostsActionsCreators.getPosts,
      // getOnePost: PostsActionsCreators.getOnePost,
    },
    dispatch,
  );

const mapStateToProps = store => ({
  posts: selectors.getPosts(store),
  post: selectors.getOnePost(store),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withTranslation('page1')(Page1));
