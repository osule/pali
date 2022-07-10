module.exports = {
    webpack(config) {
        config.entry = "./app.tsx";
        delete config.optimization.splitChunks;
        delete config.optimization.runtimeChunk;
        config.output.filename = '[name].js';
        config.output.chunkFilename = '[name].chunk.js';
        config.resolve.extensions = ['.tsx', '.ts', '.js', '.json'];
        config.module.rules[0].oneOf.push({
            test: /\.tsx?$/,
            loader: 'ts-loader',
            exclude: /node_modules/,
        });
        config.optimization
    }
}