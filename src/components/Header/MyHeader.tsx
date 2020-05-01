import React from "react";
import { PageHeader, Button } from "antd";
import './Header.css';


export const MyHeader = () => {
    return(
    <>
        <PageHeader
            className="header"
            title="Simple page for training"
            extra={[
                <Button key="2">Written books</Button>,
                <Button key="1">Todo List</Button>,
              ]}
        />
    </>
    );
}