export interface Application {
  id: string;
  versions: Version[];
}

export interface Version {
  date: Date;
  metaData: MetaData;
  technicalData: TechnicalData;
}

interface MetaData {
  name: string;
  owner: string;
  manager: string;
}

interface TechnicalData {
  roles: Role[];
}

export interface Role {
  name: string;
  permissions: string[];
}
