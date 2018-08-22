const config = {
  database: {
    host: '',
    dialect: '',
    database: '',
    username: '',
    password: '',
  }
};

const dataTypes = [
  'STRING',
  'TEXT',
  'INTEGER',
  'BIGINT',
  'FLOAT',
  'DOUBLE',
  'DECIMAL',
  'DATE',
  'BOOLEAN',
];

const models0 = {
  user: {
    mark: '用户',
    keys: {
      uuid: {
        mark: 'UUID',
        type: 'STRING',
        foreignKey: 'user.uuid',
        opts: {
          unique: true,
          allowNull: false,
        },
      },
    }
  },
  book: {
    id: {
      type: 'STRING',
      unique: true,
      allowNull: false,
    },
  }
}

const models1 = [
  {
    name: 'user',
    keys: [
      {
        name: 'uuid',
        mark: 'UUID',
        type: 'STRING',
        opts: {
          unique: true,
          allowNull: false,
        },
      },
      {
        name: 'uuid',
        mark: 'UUID',
        type: 'STRING',
        opts: {
          unique: true,
          allowNull: false,
        },
      },
    ],
  },
];