import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const projects = import.meta.glob("../projects/*.jsx");

export default function ProjectDetail() {
    const { slug } = useParams();

    const [Component, setComponent] = useState(null);

    useEffect(() => {
        const loader = projects[`../projects/${slug}.jsx`];

        if (!loader) {
            setComponent(() => () => <div>Not found</div>);
            return;
        }

        loader().then((module) => {
            setComponent(() => module.default);
        });
    }, [slug]);

    if (!Component) return <div>Loading...</div>;

    return <Component />;
}
