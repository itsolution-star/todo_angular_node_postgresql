module.exports = function Task(sequelize, DataTypes) {
 var Task = sequelize.define('task', {
  text: {
    type: DataTypes.STRING,
    notEmpty: true
  },
  status: {
    type: DataTypes.BOOLEAN,
    notEmpty: true
  }
 });
 return Task;
}; // end exports