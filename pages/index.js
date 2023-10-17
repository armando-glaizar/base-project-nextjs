import React, { useEffect, useState } from 'react';

const HomePage = () => {
    const [ list, setList ] = useState([]);

    useEffect (() => {
        window
            .fetch('https://gutendex.com/books/')
            .then((response) => response.json())
            .then(({results}) => {
                setList(results);
            })
    }, []);

    return (
        <div>
            <h1>Lista de Libros</h1>
            {
                list.map((book) => (
                    <div>{book.title}</div>
                ))
            }
        </div>
    );
}

export default HomePage;
