import { Loader2Icon } from "lucide-react";

import { Button } from "@/components/ui/button";

const ButtonLoading = () => (
  <Button size="sm" disabled>
    <Loader2Icon className="animate-spin" />
    Please wait
  </Button>
);

export default ButtonLoading;