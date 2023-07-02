import Link from "next/link";

export const ParentChanges = () => {

    return (
        <>
            <p>
                On every re-render React will re-mount this component (i.e. destroy it and re-create it from scratch), which is going to be much slower than a normal re-render. On top of that, this will lead to such bugs as:
            </p>
            <p>
                “flashes” of content during re-renders
            </p>
            <p>
                state being reset in the component with every re-render
            </p>
            <p>
                useEffect with no dependencies triggered on every re-render
            </p>
            <p>
                if a component was focused, focus will be lost
            </p>
            <Link href={'https://dev-links-seven.vercel.app/docs/ReactJS/Rerender#avoid-creating-components-in-render-function-'} target="_blank">avoid-creating-components-in-render-function</Link>

        </>
    );
};



export default ParentChanges