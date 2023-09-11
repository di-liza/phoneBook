import { Loader, UserMenu } from 'components';
import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { isLoggedInSelector } from 'redux/auth/selectors';
import { AuthLink, StyledHeader, StyledLink } from './Layout.styled';
import { AiFillHome } from 'react-icons/ai';
import { RiContactsBookFill } from 'react-icons/ri';

function Layout() {
  const isLoggedIn = useSelector(isLoggedInSelector);
  return (
    <>
      <StyledHeader>
        <nav className="navigation">
          <div className="links-box">
            <StyledLink to="/">
              <AiFillHome className="icon" title={'Home'} />
            </StyledLink>
            {isLoggedIn && (
              <StyledLink to="/contacts">
                <RiContactsBookFill className="icon" title={'Phone Book'} />
              </StyledLink>
            )}
          </div>

          <>
            {!isLoggedIn ? (
              <div className="linksWrapper">
                <AuthLink to="/login">Sign in</AuthLink>

                <AuthLink to="/register">Sign up</AuthLink>
              </div>
            ) : (
              <UserMenu />
            )}
          </>
        </nav>
      </StyledHeader>
      <Suspense fallback={<Loader width={80} height={80} top={150} />}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default Layout;
