import Tab from "./Tab.tsx";
import Tabs from "./Tabs.tsx";

export const CompoundComponents = () => {
  return (
    <Tabs>
      <Tab label="Jiraffa">
        🦒
      </Tab>
      <Tab label="Delfín">
        🐬
      </Tab>
      <Tab label="Lagarto">
        🦎
      </Tab>
    </Tabs>
  );
};
