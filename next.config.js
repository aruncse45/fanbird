const path = require("path");
const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")],
    },
    // images: {
    //     remotePatterns: [
    //         {
    //             protocol: 'https',
    //             hostname: 'images.unsplash.com',
    //             port: '',
    //             pathname: '**',
    //         },
    //     ],
    // },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: [
                {
                    loader: '@svgr/webpack',
                },
            ],
        })

        return config
    },
};

module.exports = nextConfig;
