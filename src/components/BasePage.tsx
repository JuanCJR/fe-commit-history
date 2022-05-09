import { ReactNode } from "react";

import { Stack, ScaleFade } from "@chakra-ui/react";
import { LoadingPage } from "./LoadingPage";

interface BasePageProps {
  children?: ReactNode;
  isLoading: boolean;
  isOpen: boolean;
}

export const BasePage = ({ children, isLoading, isOpen }: BasePageProps) => {
  if (isLoading) {
    return <LoadingPage />;
  } else {
    return (
      <ScaleFade initialScale={0.9} in={isOpen}>
        <Stack spacing={2} mb={10}>
          {children}
        </Stack>
      </ScaleFade>
    );
  }
};
