import React from 'react';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {

    const navigate = useNavigate();

    return (
        <div>

            <Button onClick={()=>{navigate('/buyerSignup')}}>Buyer</Button>
            <Button onClick={()=>{navigate('/Register')}}>Merchant</Button>
        </div>
    )
}