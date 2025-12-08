import React from 'react';
import Badge from './Badge';
import { Card, Space } from 'antd';
export default function ContactCard({ id, name, phone, email, isFavorite, role }) {
    const roleColors = {
        'Amigo': '#10B981',   // verde
        'Trabajo': '#3B82F6', // azul
        'Familia': '#F472B6'  // rosa
    };
    const badgeColor = roleColors[role] || '#9CA3AF';
    
    const cardStyle = {
        border: isFavorite ? ' solid #ffd700' : '1px solid #ddd',
        borderRadius: '8px',
        padding: '15px',
        marginBottom: '10px',
        backgroundColor: isFavorite ? '#fffef0' : '#fff'
    };

    return (

        <Space direction="vertical" size={16} style={{ padding: '10px', display: 'flex' }}>
            <Card style={cardStyle} title={name} extra={<a href="#">More</a>}>
                {phone}
                {email}
                <div style={{ marginBottom: 8 }}>
                    <strong>Rol:</strong> <Badge text={role} color={badgeColor} />
                </div>
                {id}
            </Card>
        </Space>

    )
}

