/**
 * define User model
 * @author victor li
 * @date 2015/05/13
 */
var sequelize = require('sequelize');

var User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    },
    name: {
        type: DataTypes.STRING(100),
        unique: true
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    created: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW
    }
});

modules.export = User;
