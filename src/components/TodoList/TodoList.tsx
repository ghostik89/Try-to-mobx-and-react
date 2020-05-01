import React from 'react';
import {useStore} from "../../helpers/use-store";
import {TodoItemComponent} from "./TodoItem";
import {useObserver} from "mobx-react-lite";
import { Typography, Row, Col, Card} from 'antd';
const { Title } = Typography;

export const TodoListComponent = () => {
    const todoList = useStore();

    return useObserver(() => (
        <Row className="todo-list">
            <Col className="open-todos">
            <Card title="Open Todos" >
                {todoList.openTodos.map(todo => <TodoItemComponent key={`${todo.id}-${todo.text}`} todo={todo}/>)}
            </Card>
            </Col>
            <Col className="finished-todos">
                <Title level={3}>Finished Todos</Title>
                {todoList.finishedTodos.map(todo => <TodoItemComponent key={`${todo.id}-${todo.text}`} todo={todo}/>)}
            </Col>
        </Row>
    ));
};