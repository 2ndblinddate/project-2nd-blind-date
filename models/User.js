const{Model, DataTypes} = require('sequelize');

class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
      }
    }
User.init({
    id: {
        type:DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true 
    },
    username: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    email: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [5]
        }

    }
},
  {
      hooks: {
          beforeCreate: async(userInfo) => {
             userInfo.password = await bcrypt.hash(userInfo.password, 10);
             return userInfo;

          }
      },
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'user'
    }
  );
  
  module.exports = User;
  
