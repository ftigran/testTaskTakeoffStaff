const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = function(source, build) {
    return {
        module: {
            rules: [{
                test: /\.(jpg|png|svg)$/,
                loader: 'file-loader',
                options: {
                    path: "src/img",
                    name: '[name].[ext]',
                        outputPath: (url, resourcePath, context) => {
                          // `resourcePath` is original absolute path to asset
                          // `context` is directory where stored asset (`rootContext`) or `context` option
              
                          // To get relative path you can use
                          // const relativePath = path.relative(context, resourcePath);
                          if (/\.*[\/\\]fonts[\/\\].*\.svg/g.test(resourcePath)) {
                            return `webfonts/${url}`;
                          }
                          return `images/${url}`
                        },
                },
            }, ],
        },
        plugins: [
            new CopyWebpackPlugin({
                patterns: [
                  {
                    from: source+'/img/',
                    to: build+'/images/',
                    toType: 'dir',
                  },
                //   {
                //     from: 'src/files/',
                //     to: 'files/',
                //     toType: 'dir',
                //   },
                ]
              }),
          ],
    };
}