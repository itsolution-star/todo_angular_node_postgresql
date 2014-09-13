module.exports = {
  up: function(migration, DataTypes, done) {
    // add altering commands here, calling 'done' when finished
    migration.renameColumn(
      'tasks', 'status', 'done'
    ).complete(done);
  },
  down: function(migration, DataTypes, done) {
    // add reverting commands here, calling 'done' when finished
    migration.renameColumn(
      'tasks', 'done', 'status'
      ).complete(done);
  }
}
