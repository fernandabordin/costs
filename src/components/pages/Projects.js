import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import LinkButton from '../layout/LinkButton'
import Message from '../layout/Message'
import Container from '../layout/Container'
import ProjectCard from '../project/ProjectCard'
import styles from '../pages/Projects.module.css'

function Projects(){
    const [projects, setProjetcs] = useState([])


    const location = useLocation()
        let message = ''
        if(location.state) {
            message = location.state.message
        }

    useEffect(() => {

        fetch('http://localhost:5000/projects', {
            method: 'GET',
            headers: {
                'Content-Type': 'appication/json',
            },
        })
            .then(resp => resp.json())
            .then(data => {
                setProjetcs(data)
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Meus Projetos</h1>
                <LinkButton to="/newproject" text="Criar Projeto" />
            </div>
            {message && <Message type="success" msg={message} />}
            <Container customClass="start">
                {projects.length > 0 &&
                    projects.map((project) => (
                        <ProjectCard 
                        id={project.id}
                        name={project.name} 
                        budget={project.budget}
                        category={project?.category?.name}
                        key={project.id}/>
                    ))}
            </Container>
        </div>
    )
}

export default Projects