import ghpages from 'gh-pages';

/**
 * This task pushes to the `master` branch of the configured `repo`.
 */
ghpages.publish('dist', {
    branch: 'gh-pages',
    repo: 'git@github.com:JDong3/JDong3.github.io.git'
  }, function(){});