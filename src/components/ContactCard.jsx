import React from 'react';
import Badge from './Badge';

export default function ContactCard({ id, name, phone, email, isFavorite, role }) {
    const roleColors = {
        'Amigo': '#10B981',
        'Trabajo': '#3B82F6',
        'Familia': '#F472B6'
    };
    const badgeColor = roleColors[role] || '#9CA3AF';

    return (
        <div className={`rounded-lg p-5 transition-all ${
            isFavorite
                ? 'bg-yellow-50 border-2 border-yellow-400 shadow-lg'
                : 'bg-white border border-gray-200 shadow-md hover:shadow-lg'
        }`}>
            <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-bold text-gray-800">{name}</h3>
                <a href="#" className="text-blue-500 hover:text-blue-700 text-sm font-semibold">More</a>
            </div>
            <div className="space-y-2 text-sm text-gray-700">
                <p><strong>Tel:</strong> {phone}</p>
                <p><strong>Email:</strong> {email}</p>
                <div className="flex items-center gap-2">
                    <strong>Rol:</strong>
                    <Badge text={role} color={badgeColor} />
                </div>
            </div>
            <div className="mt-3 text-xs text-gray-500">ID: {id}</div>
        </div>
    )
}

