import http, {AxiosResponse} from 'axios';
import {Container} from "../../model/Container";
import {ContainerDetails} from "../../model/ContainerDetails";

class ContainerService {

    public getContainers(active: boolean): Promise<AxiosResponse<Container[]>> {
        return http.get<Container[]>('/api/containers', {params: {includeInactiveContainers: active}});
    }

    public getContainerDetails(id: String): Promise<AxiosResponse<ContainerDetails>> {
        return http.get<ContainerDetails>(`/api/containers/${id}`);
    }

}

export default new ContainerService();
