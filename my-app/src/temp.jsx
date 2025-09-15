import React from 'react';

function Welcome({ name }) {
    return <h1>Welcome, {name}!</h1>;
}

export default function App() {
    return <Welcome name="Sivasankar" />;
}