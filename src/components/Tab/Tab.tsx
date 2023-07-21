import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { TabItem } from "./TabItem";

export interface TabProps {
    className?: string;
    items?: Array<TabItem>;
    defaultKey: string;
    type: "tabs" | "pills";
}

const Tab: React.FC<TabProps> = (TabProps) => {
    const [selectedItem, setSelectedItem] = useState(TabProps.defaultKey);

    const isActive = (props: TabItem): boolean => props.key == selectedItem;

    return (
        <>
            <ul
                className={["p-2 pb-0", "nav", `nav-${TabProps.type}`].join(" ")}
                style={{ background: "linear-gradient(0deg,#dfe3e4,#f3f4f5)" }}
            >
                {TabProps.items?.map((x) => (
                    <li key={x.key} role="button" className="nav-item">
                        <div
                            className={["nav-link", isActive(x) ? "active" : "", x.disabled ? "disabled text-muted" : ""].join(" ")}
                            aria-current="page"
                            onClick={() => setSelectedItem(x.key)}
                        >
                            {x.title}
                        </div>
                    </li>
                ))}
            </ul>
            <div className="p-2 border border-top-0">
                {TabProps.items
                    ?.filter((x) => isActive(x))
                    .map((x) => (
                        <div className="tab-pane active">{x.content}</div>
                    ))}
            </div>
        </>
    );
};
Tab.defaultProps = {
    type: "tabs",
};
export default Tab;
