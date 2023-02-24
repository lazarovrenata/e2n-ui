export type Contract = {
  id: number;
  type: string;
  validUntil: Date;
};

export type Location = {
  id: number;
  locationGroupId: number;
  name: string;
  key: string;
  numberOfEmployees: number;
  maxNumberOfEmployees: number;
  contract: Contract;
  createdAt: Date;
  updatedAt?: Date;
};

export const data: Location[] = [
  {
    id: 0,
    locationGroupId: 2342,
    name: 'FooBar',
    key: 'foobar100',
    numberOfEmployees: 25,
    maxNumberOfEmployees: 30,
    contract: {
      id: 0,
      type: 'Paket S',
      validUntil: new Date('2099-12-31'),
    },
    createdAt: new Date('2022-07-01'),
    updatedAt: new Date(),
  },
  {
    id: 1,
    locationGroupId: 4728234,
    name: 'Café Einzigartig',
    key: 'einzigartig',
    numberOfEmployees: 5,
    maxNumberOfEmployees: 10,
    contract: {
      id: 0,
      type: 'Stillgelegt',
      validUntil: new Date('2099-12-31'),
    },
    createdAt: new Date('2015-06-01'),
    updatedAt: new Date('2022-01-01'),
  },
  {
    id: 783,
    locationGroupId: 4728234,
    name: 'Café Einzigartig',
    key: 'einzigartig',
    numberOfEmployees: 5,
    maxNumberOfEmployees: 10,
    contract: {
      id: 0,
      type: 'Stillgelegt',
      validUntil: new Date('2099-12-31'),
    },
    createdAt: new Date('2015-06-01'),
    updatedAt: new Date('2022-01-01'),
  },
];

export type Data = {
  id: number;
  contractId: string;
  customerId: string;
  numberOfLocations: number | undefined;
  createdAt: Date;
};

export const defaultData: Data[] = [
  {
    id: 0,
    contractId: 'B2001234',
    customerId: '#009700',
    numberOfLocations: 4,
    createdAt: new Date('2015-06-01'),
  },
  {
    id: 1,
    contractId: 'B20024729',
    customerId: '#009701',
    numberOfLocations: 32,
    createdAt: new Date('2016-03-23'),
  },
  {
    id: 1,
    contractId: 'B20024729',
    customerId: '#009701',
    numberOfLocations: 32,
    createdAt: new Date('2016-03-23'),
  },
  {
    id: 1,
    contractId: 'B20024729',
    customerId: '#009701',
    numberOfLocations: 32,
    createdAt: new Date('2016-03-23'),
  },
  {
    id: 1,
    contractId: 'B20024729',
    customerId: '#009701',
    numberOfLocations: 32,
    createdAt: new Date('2016-03-23'),
  },
  {
    id: 1,
    contractId: 'B20024729',
    customerId: '#009701',
    numberOfLocations: 32,
    createdAt: new Date('2016-03-23'),
  },
  {
    id: 1,
    contractId: 'B20024729',
    customerId: '#009701',
    numberOfLocations: 32,
    createdAt: new Date('2016-03-23'),
  },
];
