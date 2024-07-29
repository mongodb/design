import { css } from "@emotion/css";
import Button from "@leafygreen-ui/button";
import { login } from "@/auth/login";

export function LogIn() {
  return (
    <Button
      size="small"
      onClick={() => login()}
      className={css`
        border-radius: 50px;
      `}
    >
      Log In
    </Button>
  );
}
