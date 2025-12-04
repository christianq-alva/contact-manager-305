import React from 'react';
import { Card, Space } from 'antd';
export default function ContactCard() {
    return (
        <Space direction = "vertical" size={16}  style={{padding:'10px', display: 'flex'}}>
            <Card title="Christian Quinteros" extra={<a href="#">More</a>}>
                <p>Teléfono: +51 994156682</p>
                <p>Email: christianquinteros@upeu.edu.pe</p>
            </Card>
        </Space>
    )
}

