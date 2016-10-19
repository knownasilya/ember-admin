import buildRoutes from 'ember-engines/routes';

export default buildRoutes(function() {
  this.route('model-records', { path: ':name', resetNamespace: true }, function() {
    this.route('edit', { path: ':id/edit' });
    this.route('new');
  });
}
