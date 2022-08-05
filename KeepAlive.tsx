import React, { useEffect } from 'react';

console.log('Initiated keep-alive')

interface KeepAliveProps {
    url: string;
    sleep?: number;
}

function KeepAlive(props: KeepAliveProps) {

    const url = props.url;
    const sleep = props.sleep == null ? 5 * 60 * 1000 : props.sleep;

    function handleErrors(response: { ok: any; statusText: string | undefined; }) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    }

    useEffect(() => {
        const interval = setInterval(() => {
            fetch(url!)
                .then(handleErrors)
                .catch(() => {
                        console.log('An error occurred calling keep-alive endpoint')
                    }
                )
        }, sleep)
        return () => clearInterval(interval);
    })

    return (
        <div/>
    )
}

export default KeepAlive;