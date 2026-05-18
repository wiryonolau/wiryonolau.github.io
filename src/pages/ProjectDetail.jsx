import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProjectTemplate } from "../component/Template";
const projects = import.meta.glob("../projects/*.jsx");

export default function ProjectDetail() {
    const { slug } = useParams();

    const [project, setProject] = useState(null);

    useEffect(() => {
        const loader = projects[`../projects/${slug}.jsx`];

        if (!loader) {
            setProject({
                meta: {
                    title: "Not found",
                },
                content: <div>Project not found</div>,
            });

            return;
        }

        loader().then((module) => {
            setProject({
                meta: module.meta,
                content: module.content,
            });
        });
    }, [slug]);

    if (!project) return <div>Loading...</div>;

    return (
        <ProjectTemplate title={project.meta.title} content={project.content} />
    );
}
