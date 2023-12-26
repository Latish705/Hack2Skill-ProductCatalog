import React from 'react';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {

    const navigate = useNavigate();

    return (
        <div>
            <section>
                <div></div>
                <header>
                    <h1>
                        Commerce for everyone
                    </h1>
                    <p>
                        A one stop solution for buyers and merchants
                    </p>
                    <Button>Explore</Button>
                </header>
            </section>
        </div>
    )
}