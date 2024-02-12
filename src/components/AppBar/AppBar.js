
import { Header } from "components/AppLayoutStyled";
import { AuthNav } from "components/AuthNav/AuthNav";
import { useAuth } from "Hooks/useAuth";
import { Navigation } from "components/Navigation/Navigation";
import { UserMenu } from "components/UserMenu/UserMenu";


export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Header >
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};
