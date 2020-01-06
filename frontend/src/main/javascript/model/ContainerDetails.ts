export interface ContainerDetails {
    Args: string[];
    Config: Config;
    Created: string;
    Driver: string;
    ExecDriver?: any;
    HostConfig: HostConfig;
    HostnamePath: string;
    HostsPath: string;
    LogPath: string;
    Id: string;
    SizeRootFs: number;
    Image: string;
    MountLabel: string;
    Name: string;
    RestartCount: number;
    NetworkSettings: NetworkSettings;
    Path: string;
    ProcessLabel: string;
    ResolvConfPath: string;
    ExecIDs?: any;
    State: State;
    Volumes?: any;
    VolumesRW?: any;
    Node?: any;
    Mounts: Mount[];
    GraphDriver: GraphDriver;
    Platform: string;
}

export interface Events {
}

export interface Config {
    AttachStderr: boolean;
    AttachStdin: boolean;
    AttachStdout: boolean;
    Cmd: string[];
    Domainname: string;
    Env: string[];
    ExposedPorts: string[];
    Hostname: string;
    Image: string;
    Labels: string[];
    OpenStdin: boolean;
    StdinOnce: boolean;
    Tty: boolean;
    User: string;
    Volumes: string[];
    WorkingDir: string;
}

export interface LogConfig {
    Type: string;
    Config: string[];
}

export interface RestartPolicy {
    MaximumRetryCount: number;
    Name: string;
}

export interface HostConfig {
    Binds: string[];
    BlkioWeight: number;
    ContainerIDFile: string;
    CpuPeriod: number;
    CpuRealtimePeriod: number;
    CpuRealtimeRuntime: number;
    CpuShares: number;
    CpuQuota: number;
    CpusetCpus: string;
    CpusetMems: string;
    Dns: any[];
    DnsOptions: any[];
    DnsSearch: any[];
    IpcMode: string;
    Cgroup: string;
    LogConfig: LogConfig;
    Memory: number;
    MemorySwap: number;
    MemoryReservation: number;
    KernelMemory: number;
    NetworkMode: string;
    AutoRemove: boolean;
    OomScoreAdj: number;
    PortBindings: string[];
    Privileged: boolean;
    PublishAllPorts: boolean;
    ReadonlyRootfs: boolean;
    RestartPolicy: RestartPolicy;
    CpuCount: number;
    CpuPercent: number;
    IOMaximumIOps: number;
    IOMaximumBandwidth: number;
    VolumesFrom: any[];
    PidMode: string;
    CgroupParent: string;
    VolumeDriver: string;
    ShmSize: number;
    Runtime: string;
    UTSMode: string;
    UsernsMode: string;
    ConsoleSize: number[];
}

export interface DockerDefault {
    IPAMConfig?: any;
    Links?: any;
    Aliases: string[];
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

export interface Networks {
    docker_default: DockerDefault;
}

export interface NetworkSettings {
    Bridge: string;
    SandboxID: string;
    HairpinMode: boolean;
    LinkLocalIPv6Address: string;
    LinkLocalIPv6PrefixLen: number;
    Ports: string[];
    SandboxKey: string;
    SecondaryIPAddresses?: any;
    SecondaryIPv6Addresses?: any;
    EndpointID: string;
    Gateway: string;
    PortMapping?: any;
    GlobalIPv6Address: string;
    GlobalIPv6PrefixLen: number;
    IPAddress: string;
    IPPrefixLen: number;
    IPv6Gateway: string;
    MacAddress: string;
    Networks: Networks;
}

export interface State {
    oomkilled: boolean;
    Status: string;
    Running: boolean;
    Paused: boolean;
    Restarting: boolean;
    OOMKilled: boolean;
    Dead: boolean;
    Pid: number;
    ExitCode: number;
    Error: string;
    StartedAt: string;
    FinishedAt: string;
    Health?: any;
}

export interface Destination {
    path: string;
}

export interface Mount {
    Name: string;
    Source: string;
    Destination: Destination;
    Driver: string;
    Mode: string;
    RW: boolean;
}

export interface Data {
    RootDir?: any;
    DeviceId?: any;
    DeviceName?: any;
    DeviceSize?: any;
    dir?: any;
}

export interface GraphDriver {
    Name: string;
    Data: Data;
}
