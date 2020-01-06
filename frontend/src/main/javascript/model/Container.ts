export interface Container {
    Command: string;
    Created: number;
    Id: string;
    Image: string;
    ImageID: string;
    Names: string[];
    Ports: Port[];
    Labels: string[];
    Status: string;
    State: string;
    SizeRw: number;
    SizeRootFs: number;
    HostConfig: HostConfig;
    NetworkSettings: NetworkSettings;
    Mounts: Mount[];
}

export interface Port {
    IP: string;
    PrivatePort: number;
    PublicPort: number;
    Type: string;
}

export interface HostConfig {
    NetworkMode: string;
}

export interface NetworkSettings {
    Networks: Map<string, Network>;
}

export interface Network {
    IPAMConfig?: any;
    Links?: any;
    Aliases?: any;
    NetworkID: string;
    EndpointID: string;
    Gateway: string;
    IPAddress: string;
    IPPrefixLen: number;
    IPv6Gateway: string;
    GlobalIPv6Address: string;
    GlobalIPv6PrefixLen: number;
    MacAddress: string;
}

export interface Mount {
    Name: string;
    Source: string;
    Destination: string;
    Driver: string;
    Mode: string;
    RW: boolean;
    Propagation: string;
}



