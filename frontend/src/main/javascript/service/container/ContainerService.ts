import http, {AxiosResponse} from 'axios';

class ContainerService {

    public getContainers(active: boolean): Promise<AxiosResponse<unknown[]>> {
        return http.get<unknown[]>('/api/containers', {params: {includeInactiveContainers: active}});
    }

    public getContainerDetails(id: String): Promise<AxiosResponse<unknown[]>> {
        return http.get<unknown[]>(`/api/containers/${id}`);
    }

}

export default new ContainerService();
