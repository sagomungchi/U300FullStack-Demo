package it.topping.topping.services;

import it.topping.topping.domain.Project;
import it.topping.topping.exceptions.ProjectIdException;
import it.topping.topping.repositories.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectService {

    @Autowired
    private ProjectRepository projectRepository;

    public Project saveOrUpdateProject(Project project){
        try {
            project.setProjectIdentifier(project.getProjectIdentifier().toUpperCase());
            return projectRepository.save(project);
        } catch (Exception e){
            throw new ProjectIdException("Project ID'" + project.getProjectIdentifier().toUpperCase()+"' already access");
        }
    }

    public Project findProjectByIdentifier(String projectId){

        Project project = projectRepository.findByProjectIdentifier(projectId.toUpperCase());

        if(project == null){
            throw new ProjectIdException("Project ID'" + projectId +"' dose not exist");
        }

        return  project;
    }
}
