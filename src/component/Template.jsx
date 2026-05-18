import { capitalized } from "../util";

export const ProjectTemplate = function ProjectTemplate({ title, content }) {
    return (
        <>
            <div className="fs-2 fw-bold text-center mb-3">{title}</div>
            <div>
                {Object.entries(content).map(([key, value]) => {
                    return (
                        <div key={key} className="mb-3">
                            <div className="fs-3 fw-bold">
                                {capitalized(key)}
                            </div>
                            <div style={{ whiteSpace: "pre-line" }}>
                                {value}
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};
