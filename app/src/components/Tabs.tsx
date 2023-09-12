"use client";

import React from "react";
import * as Tabs from "@radix-ui/react-tabs";

export const TabsComponent = () => (
  <Tabs.Root className="" defaultValue="tab1">
    <Tabs.List className="" aria-label="Manage your account">
      <Tabs.Trigger className="" value="tab1">
        J'utilise
      </Tabs.Trigger>
      <Tabs.Trigger className="" value="tab2">
        |J'ai testé
      </Tabs.Trigger>
      <Tabs.Trigger className="" value="tab3">
        |J'ai travaillé avec en entreprise
      </Tabs.Trigger>
      <Tabs.Trigger className="" value="tab4">
        |J'ai découvert en formation
      </Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content value="tab1">
      <ul className="flex">
        <Tag>NextJs</Tag>
        <Tag>NestJs</Tag>
        <Tag>Docker</Tag>
        <Tag>Javascript</Tag>
        <Tag>ReactJS</Tag>
        <Tag>TypeScript</Tag>
      </ul>
    </Tabs.Content>
    <Tabs.Content className="" value="tab2">
      <ul className="flex">
        <Tag>NextJs</Tag>
        <Tag>C</Tag>
        <Tag>Php</Tag>
        <Tag>Java</Tag>
        <Tag>C#</Tag>
        <Tag>Vscode</Tag>
      </ul>
    </Tabs.Content>
    <Tabs.Content className="" value="tab3">
      <ul className="flex">
        <Tag>PhpStorm</Tag>
        <Tag>Illustrator</Tag>
        <Tag>Photoshop</Tag>
        <Tag>Gulp</Tag>
        <Tag>Npm</Tag>
        <Tag>Npx</Tag>
      </ul>
    </Tabs.Content>
    <Tabs.Content className="" value="tab4">
      <ul className="flex">
        <Tag>Symfony</Tag>
        <Tag>AngularJS</Tag>
        <Tag>Mysql</Tag>
        <Tag>MongoDB</Tag>
        <Tag>Php</Tag>
        <Tag>Jquery</Tag>
        <Tag>Wordpress</Tag>
      </ul>
    </Tabs.Content>
  </Tabs.Root>
);

type Params = {
  children: React.ReactNode;
};

const Tag = ({ children }: Params) => {
  return (
    <li
      className="py-2 px-4 inline rounded-lg m-2"
      style={{ boxShadow: "0 0 0 1px rgba(0,0,0, 0.2)" }}
    >
      {children}
    </li>
  );
};

export default TabsComponent;
