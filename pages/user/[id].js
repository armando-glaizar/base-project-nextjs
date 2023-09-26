import React from 'react';
import { useRouter } from 'next/router';

const UserIdPage = () => {
    const router = useRouter();

    return (
        <div>
            <h1>Hola Mundo 1, ID: { router.query.id }</h1>
        </div>
    );
}

export default UserIdPage;
