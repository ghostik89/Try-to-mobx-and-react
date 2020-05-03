import React from 'react';
import {useStore} from "../../helpers/use-store";
import {TodoItemComponent} from "./TodoItem";
import {useObserver} from "mobx-react-lite";
import { Row, Col, Card} from 'antd';
import '../../containers/stylesTodo.css'

export const TodoListComponent = () => {
    const todoList = useStore();

    return useObserver(() => (
        <Row>
            <Col span={12}>
            <Card title="Open Todos" className="layoutStyle_todoList_card">
                {todoList.openTodos.map(todo => <TodoItemComponent key={`${todo.id}-${todo.text}`} todo={todo}/>)}
            </Card>
            </Col>
            <Col span={12}>
                <Card title="Finished Todos" className="layoutStyle_todoList_card">
                    {todoList.finishedTodos.map(todo => <TodoItemComponent key={`${todo.id}-${todo.text}`} todo={todo}/>)}
                </Card>
            </Col>
        </Row>
    ));
};