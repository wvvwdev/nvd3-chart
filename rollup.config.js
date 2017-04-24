
import nodeResolve  from 'rollup-plugin-node-resolve';
import commonjs     from 'rollup-plugin-commonjs';
import uglify       from 'rollup-plugin-uglify';

export default {
  entry: 'dist/index.js',
  dest: 'dist/bundle.umd.js',
  sourceMap: false,
  format: 'umd',
  moduleName: 'nvd3Chart',
  onwarn,
  plugins: [
      commonjs({
          include: 'node_modules/rxjs/**',
      }),
      nodeResolve({ jsnext: true, module: true }),
      uglify()  
  ],
  globals: {
    '@angular/core': 'ng.core',
    'd3': 'd3',
    'nvd3': 'nv'
  }
};

function onwarn(message) {
  const suppressed = [
    'UNRESOLVED_IMPORT',
    'THIS_IS_UNDEFINED'
  ];

  if (!suppressed.find(code => message.code === code)) {
    return console.warn(message.message);
  }
}
