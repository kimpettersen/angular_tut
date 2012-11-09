basePath = '../';

files = [
  JASMINE,
  JASMINE_ADAPTER,
  'public/js/lib/angular/angular.js',
  'public/js/lib/angular/angular-*.js',
  'test/lib/angular-mocks.js',
  'public/js/**/*.js',
  'test/unit/**/*.js'
];

autoWatch = true;

browsers = ['Chrome'];

junitReporter = {
  outputFile: 'test_out/unit.xml',
  suite: 'unit'
};