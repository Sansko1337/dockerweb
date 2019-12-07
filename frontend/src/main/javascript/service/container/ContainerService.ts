import http, {AxiosResponse} from 'axios';

class ContainerService {

    public getContainers(active: boolean): Promise<AxiosResponse<unknown[]>> {
        return http.get<unknown[]>('/containers', {params: {includeInactiveContainers: active}});
    }

}

export default new ContainerService();
