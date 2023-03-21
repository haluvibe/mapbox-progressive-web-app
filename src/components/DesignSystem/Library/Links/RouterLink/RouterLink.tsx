import { Link as MuiLink, LinkProps as MuiLinkProps } from "@mui/material";
import React from "react";

export type RouterLinkProps = Omit<MuiLinkProps, "component" | "to">;

export const RouterLink = ({ href = "/", ...props }: RouterLinkProps) => {
  return <MuiLink href={href} {...props} />;
};

RouterLink.displayName = "RouterLink";
