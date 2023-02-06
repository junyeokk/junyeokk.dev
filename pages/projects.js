import Layout from "../components/layout";
import { TOKEN, DATABASE_ID } from "../config";
import ProjectItem from "../components/projects/project-item";

export default function Projects({projects}) {

    return (
        <Layout>
            <div className="flex flex-col items-center justify-center min-h-screen px-5 mb-10 px-6">
                <h1 className="text-4xl font-bold sm:text-6xl">
                    총 프로젝트: {projects.results.length}
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 py-10 m-6 gap-8">
                    {projects.results.map((aProject) => (
                        <ProjectItem key={aProject.id} data={aProject}/>
                    ))}
                </div>
            </div>
            
        </Layout>
    );
}

// getStaticProps(): 빌드 타임에 호출
// export async function getStaticProps() { ... }

// getServerSideProps(): 요청이 올 때마다 호출
export async function getServerSideProps() {
    const options = {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'Notion-Version': '2022-06-28',
            'content-type': 'application/json',
            Authorization: `Bearer ${TOKEN}`
        },
        body: JSON.stringify({
            sorts: [
                {
                    "property": "Name",
                    "direction": "ascending"
                }
            ],
            page_size: 100
        })
    };

    const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options)
    const projects = await res.json();

    const projectNames = projects.results.map((aProject) => (
        aProject.properties.Name.title[0]?.plain_text
    ));

    console.log(`projectNames: ${projectNames}`);
    
    return {
        props: {projects},
    }
}