import * as React from "react";
import {useState} from "react";

interface ParentComponentProps {
  render: (data: string[]) => React.ReactNode
}

const ParentComponent: React.FC<ParentComponentProps> = ({render}) => {
  const [data] = useState(["Apple 🍎", "Banana 🍌", "Orange 🍊"]);

  return <ul>{render(data)}</ul>
};

export default ParentComponent;
