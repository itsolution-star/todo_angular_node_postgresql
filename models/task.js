module.exports = function Task(sequelize, DataTypes) {
 var Task = sequelize.define('task', {
  text: {
    type: DataTypes.STRING,
    notEmpty: true
  },
  done: {
    type: DataTypes.BOOLEAN,
    notEmpty: true
  }
 });
 return Task;
}; // end exports