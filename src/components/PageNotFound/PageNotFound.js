import React, { useContext } from 'react';

import { RouteTransitionAnimationContext } from '../../context/RouteTransitionAnimationContext';
import { ROOT_PATH } from '../../constants/routes';
import ErrorBoundary from '../ErrorBoundary';
import Section from '../Section';
import Headline from '../Headline';
import Subheadline from '../Subheadline';
import Content from '../Content';
import Navigation from '../Navigation';
import { SugarCat } from '../Characters';
import Page from './Page';
import Wrapper from './Wrapper';
import Button from './Button';

function PageNotFound() {
  const { animateAndRedirect } = useContext(RouteTransitionAnimationContext);

  return (
    <ErrorBoundary>
      <Page title="404 - Page not found">
        <Section>
          <Content>
            <Headline>404 - Page not found</Headline>
            <Subheadline>You're in the wrong place.</Subheadline>
            <SugarCat />
          </Content>
        </Section>
        <Wrapper>
          <Content>
            <Navigation>
              <Button onClick={() => animateAndRedirect(ROOT_PATH)}>Take me home</Button>
            </Navigation>
          </Content>
        </Wrapper>
      </Page>
    </ErrorBoundary>
  );
}

export default PageNotFound;