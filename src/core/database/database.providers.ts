import { Sequelize } from 'sequelize-typescript';
import { Product } from '../../products/entities/product.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'password',
        database: 'marketplace',
      });
      sequelize.addModels([Product]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
