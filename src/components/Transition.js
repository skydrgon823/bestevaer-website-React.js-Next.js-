import { useRef } from 'react';
import { TransitionGroup, Transition as ReactTransition } from 'react-transition-group';

const TIMEOUT = 500;
const TRANSITIONS = {
    entering: {
        position: `absolute`,
        opacity: 0
    },
    entered: {
        transition: `opacity ${TIMEOUT}ms linear`,
        opacity: 1
    },
    exiting: {
        transition: `opacity ${0}ms linear`,
        opacity: 0
    },
};

const Transition = ({ children, location }) => {
    const nodeRef = useRef(null);

    return (
        <TransitionGroup style={{ position: 'relative' }}>
            <ReactTransition
                key={location}
                nodeRef={nodeRef}
                timeout={{
                    enter: TIMEOUT,
                    exit: TIMEOUT,
                }}
            >
                {(status) => (
                    <div style={{ ...TRANSITIONS[status] }} ref={nodeRef}>
                        {children}
                    </div>
                )}
            </ReactTransition>
        </TransitionGroup>
    );
};

export default Transition;