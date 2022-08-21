import React, { useEffect } from 'react';

interface KeepAliveProps {
  url: string;
  sleep?: number;
  delay?: number;
  maxIdleTime?: number;
  eventDetection?: boolean;
}

function KeepAlive(props: KeepAliveProps) {

  const url: string = props.url;
  const sleep: number = props.sleep == null ? 5 * 60 * 1000 : props.sleep;
  const delay: number = props.delay == null ? 0 : props.delay;
  const eventDetection: boolean = props.eventDetection == null ? false : props.eventDetection;
  const maxIdleTime: number = props.maxIdleTime == null ? props.sleep! : props.maxIdleTime;

  let lastEventDateTime: number = new Date().getTime();

  ['keydown', 'mousemove', 'mousedown'].forEach(event => {
    document.addEventListener(event, () => {
      lastEventDateTime = new Date().getTime()
    })
  })

  function handleErrors(response: { ok: any; statusText: string | undefined; }) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }

  function isIdle(): boolean {
    if (eventDetection) {
      return lastEventDateTime + maxIdleTime <= new Date().getTime();
    }
    return true;
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (isIdle()) {
          fetch(url!)
            .then(handleErrors)
            .catch((e) => {
                console.warn('Keep-alive endpoint responded with an error: ', e.message)
              }
            )
        }
      }, sleep)
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  })

  return (
    <div/>
  )
}

export default KeepAlive;