import React, {FunctionComponent, useCallback, useEffect, useState} from "react";
import ContainerService from "../../service/container/ContainerService";
import {ContainerDetails} from "../../model/ContainerDetails";

interface ContainerDetailsProp {
    id: String;
}

export const ContainerDetailsView: FunctionComponent<ContainerDetailsProp> = (props: ContainerDetailsProp) => {

    const [container, setContainer] = useState<ContainerDetails | null>(null);

    const refreshContainer = useCallback(() => {
        ContainerService.getContainerDetails(props.id).then(data => {
            setContainer(data.data)
        });
    }, [props.id]);

    useEffect(() => {
        refreshContainer();
    }, [refreshContainer]);

    return (
        <div>
            {container &&
            <>
                <h1>{container.Name}</h1>
                <p>Image: <pre>{JSON.stringify(container.Image, null, 4)}</pre></p>
                <p>Mounts: <pre>{JSON.stringify(container.Mounts, null, 4)}</pre></p>
                <p>NetworkSettings: <pre>{JSON.stringify(container.NetworkSettings, null, 4)}</pre></p>
                <p>HostConfig: <pre>{JSON.stringify(container.HostConfig, null, 4)}</pre></p>
                <p>HostNamePath: <pre>{JSON.stringify(container.HostnamePath, null, 4)}</pre></p>
            </>}
        </div>
    )
};
