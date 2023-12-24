import React from 'react';
import AuthCard from '../../components/AuthCard';

export default function BuyerAuth() {

    const handleSubmit = (formData) => {
        console.log('submit function here', formData)
    }

    return (
        <div>
            <AuthCard onSubmit={handleSubmit} actionType='signup'/>
        </div>
    )
}