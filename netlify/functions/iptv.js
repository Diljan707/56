const fetch = require('node-fetch');

exports.handler = async function(event, context) {
    const url = 'https://iptv-org.github.io/iptv/index.m3u';

    const response = await fetch(url);
    const body = await response.text();

    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'audio/x-mpegurl',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, HEAD, OPTIONS',
            'Cache-Control': 'public, max-age=86400'
        },
        body
    };
};
