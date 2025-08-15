import { IconGitBranch } from "@tabler/icons-react";

import { Button } from "@repo/button";

const ButtonWithIcon = () => (
  <Button variant="outline" size="sm">
    <IconGitBranch /> New Branch
  </Button>
);

export default ButtonWithIcon;
