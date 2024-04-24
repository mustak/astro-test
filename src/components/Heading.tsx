import React, { type ElementType, type HTMLAttributes } from 'react';

type HeadingProps = {
    level: number;
    className?: string;
    children: React.ReactNode;
};

const Heading = ({
    level = 1,
    className = '',
    children,
    ...props
}: HeadingProps) => {
    const H = `h${level}` as ElementType<HTMLAttributes<HTMLHeadingElement>>


    return (
        <H
            className={` text-teal-600 ${className}`}
            {...props}
        >
            {children}
        </H>
    );
};
export default Heading;

    // keyof JSX.IntrinsicElements;
    //ElementType<HTMLAttributes<HTMLHeadingElement>>

    // Solurion 1
    // const H = React.createElement(
    //     `h${level}`,
    //     {
    //         className: `border-b-2 border-teal-600 text-teal-600 ${props.className}`,
    //     },
    //     children
    // );
    // solution 2
    // const H = {
    //     1: <h1>{children}</h1>,
    //     2: <h2>{children}</h2>,
    //     3: <h3>{children}</h3>,
    // }[level];