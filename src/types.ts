export interface Application {
  id: string;
  versions: Version[];
}

export interface Version {
  date: Date;
  metadata: MetaData;
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

interface Role {
  name: string;
  permissions: string[];
}
