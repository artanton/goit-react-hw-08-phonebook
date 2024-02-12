import { Suspense } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Outlet } from 'react-router-dom';
import { ProgressBar } from 'react-loader-spinner';
import { Container } from './AppLayoutStyled';
import { AppBar } from './AppBar/AppBar';

export const AppLayout = () => {
  return (
    <Container>
      <AppBar />

      <main>
        <Suspense
          fallback={
            <div>
              <ProgressBar
                height="80"
                width="400"
                ariaLabel="progress-bar-loading"
                wrapperStyle={{}}
                wrapperClass="progress-bar-wrapper"
                borderColor="#F4442E"
                barColor="Teal"
              />
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </main>

      <GlobalStyle />
    </Container>
  );
};