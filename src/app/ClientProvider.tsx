"use client";
import React from "react";
import ConfigProvider from "@arco-design/web-react/es/ConfigProvider";

export default function ClientProvider({ children }: { children: React.ReactNode }) {
  return <ConfigProvider>{children}</ConfigProvider>;
} 