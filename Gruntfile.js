module.exports = function(grunt) {
  const frontendStyles = [
    'elements/**/*.css',
    'nucleus/elements/**/*.css',
    'nucleus/mixins/**/*.css',
    'vendors/**/*.css'
  ];
  const frontendScripts = [
    'elements/**/*.js',
    'nucleus/elements/**/*.js'
  ];
  const jsx = [
    'bundles/**/*.jsx',
    'elements/**/*.jsx',
    'nucleus/elements/**/*.jsx',
    'nucleus/mixins/**/*.jsx'
  ];
  const path = require('path');
  const webpack = require('webpack');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    react: {
      files: {
        expand: true,
        src: jsx,
        ext: '.js'
      }
    },
    watch: {
      jsx:{
        files: jsx,
        tasks: ['react']
      },
      options: {
        livereload: true
      }
    },
    webpack: {
      frontend: {
        entry: "./bundles/frontend.js",
        output: {
          path: "concat/",
          filename: "frontend.js"
        },
        watch: true,
        progress: false,
        stats: true,
        failOnError: false,
        plugins: [
          // new webpack.optimize.UglifyJsPlugin({
          //   compress: { warnings: false }
          // })
        ],
        resolve: {
          modulesDirectories: ['node_modules', 'elements', 'mixins', 'utils', 'nucleus', 'nucleus/elements'],
          alias: {
            pagination: path.join(__dirname, '/elements/aggregator-pagination')
          }
        }
      }
    },
    jest: {
      options: {
        coverage: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-webpack');
  grunt.loadNpmTasks('grunt-react');
  grunt.registerTask('default', ['webpack', 'watch']);
};
