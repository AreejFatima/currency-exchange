import { FC, useState, Children } from "react";
import { TabStyle } from './Tab.style';
import TabButtons from "./TabButtons";

const Tabs: FC = (props: any): JSX.Element => {
  const { children } = props;
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const changeTab = (tab: typeof activeTab): void => {
    setActiveTab(tab);
  };
  let content: string[] = [];
  const buttons: string[] = [];
  return (
    <TabStyle>
      {Children.map(children, (child) => {
        buttons.push(child.props.label);
        if (child.props.label === activeTab) content = child.props.children;
      })}

      <TabButtons
        activeTab={activeTab}
        buttons={buttons}
        changeTab={changeTab}
      />
      <div className="tab-content">{content}</div>
    </TabStyle>
  );
};

export default Tabs;
