import classes from "./CompoundComponents.module.css";
import React, {useState} from "react";

interface TabsProp {
  children: React.ReactNode
}

const Tabs: React.FC<TabsProp> = ({children}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
  }

  const tabElements = React.Children.toArray(children).filter(
    (child): child is React.ReactElement => React.isValidElement(child)
  );

  return (
    <div className={classes.Tabs}>
      <ul>
        {
          tabElements.map((child, index) => (
              <li
                key={index}
                className={`${index === activeIndex ? classes.TabActive : ""}`}
                onClick={() => handleTabClick(index)}
              >
                {child.props.label}
              </li>
            )
          )
        }
      </ul>
      <p className={classes.TabContent}>
        {tabElements[activeIndex]}
      </p>
    </div>
  );
};

export default Tabs;
